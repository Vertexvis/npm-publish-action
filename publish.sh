#!/bin/bash
#
# Script that will detect packages that need to be published to our public or
# private NPM repositories.
#
# This script will look for any package versions that have changed in
# master@HEAD. For each package that has been changed, the script will run a
# `npm publish` and `git tag`, then push the tags to Github.
#
# The script is only intended be executed by CI. Do not run it manually.

git_path=$1
npm_path=$2

set -e

git_remote_url=`$git_path config --get remote.origin.url`

cd $GITHUB_WORKSPACE

start_block() {
  echo "=== $1 ==="
}

start_step() {
  echo "› $1"
}

end_block() {
  echo ""
}

end_step() {
  echo ""
}

git_tag_message() {
  directory=$1
  package=$2
  version=$3

  # Matches SSH or HTTPS Git repositories:
  #  - https://github.com/Vertexvis/vertex-web.git
  #  - git@github.com:Vertexvis/vertex-web.git
  pattern='github.com[:/](.+)\.git'
  [[ "$git_remote_url" =~ $pattern ]]
  repo_org_name="${BASH_REMATCH[1]}"

  message="${package}_v${version}"
  message+="\n\nAutomated release of v${version} for ${package}."

  echo -e "$message"
}

publish_each() {
  remote_tags=`$git_path ls-remote --tags`
  packages=`cat lerna.json | jq -r '.packages[]'`
  package_directories=($packages)

  for package_path in "${package_directories[@]}"; do 
    package_json="$package_path/package.json"
    package_name=`jq '.name' -r $package_json`
    package_version=`jq '.version' -r $package_json`

    start_block "$package_name@$package_version"

    if is_publishable "$package_name" "$package_version"
    then
      publish "$package_path" "$remote_tags"
    else
      echo "Skipping, $package_name@$version has been published."
    fi
  done
}

git_tag_exists() {
  remote_tags=$1
  tag=$2

  if `grep -E -q "$tag$" <<< $remote_tags && echo true || echo false` = "false"
  then
    return 0
  else
    return 1
  fi
}

is_publishable() {
  package_name=$1
  version=$2

  pushd ./common/temp > /dev/null
  versions=`$npm_path info --json "$package_name" versions || true`
  popd > /dev/null

  if test `echo "$versions" | jq -r ". | index(\""$version"\")"` = "null"
  then
    return 0
  else
    return 1
  fi
}

publish() {
  directory=$1
  remote_tags=$2
  package_json_file="$directory/package.json"
  package_name=`jq '.name' -r $package_json_file`
  package_version=`jq '.version' -r $package_json_file`
  git_tag_name="${package_name}_v${package_version}"
  package_changed=`$git_path diff HEAD~ -- $package_json_file | grep -q \"version\": && echo true || echo false`

  if git_tag_exists "$remote_tags" "$git_tag_name"
  then
    echo "Skipping publish, tag for v$package_version of $package_name already exists."
  else
    if ! $package_changed
    then 
      echo "Skipping publish, $package_name version has not changed."
    else
      git_tag_message=`git_tag_message "$directory" "$package_name" "$package_version"`

      start_step "Publishing $package_name@$package_version"
      # $npm_path publish $directory
      end_step

      start_step "Tagging $package_name@$package_version"
      echo -e "$git_tag_message" | git tag -a $git_tag_name -F -
      end_step

      start_step "Pushing tag $git_tag_name to upstream"
      git push "$git_remote_url" "$git_tag_name"
      end_step
    fi
  fi
}

publish_each