# npm-publish-action

This repository contains the definition for a custom [GitHub Action](https://help.github.com/en/actions/creating-actions/about-actions)
that will inspect the current set of tagged releases in the repository, and determine if any of the packages specified
in a JSON configuration file's `packages` property have a version that has not been tagged and released. This action will then create
and push a tag for each package that is found. Once this is completed, this action will determine whether each package at the current version 
is present in  the specified NPM registry, and publish any package that is not currently present in that registry.

## Usage

With minimum configuration, this action requires a [GITHUB_TOKEN](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) 
environment variable to be present for creating releases, a JSON configuration file containing a `packages` property, and
an [NPM authentication token](https://docs.npmjs.com/about-authentication-tokens) for the public `registry.npmjs.org` for publishing.

```
- uses: Vertexvis/npm-publish-action@v1
  env:
    # The GitHub token that will be used to create tags corresponding to this release.
    # By default, the ${{ secrets.GITHUB_TOKEN }} can be used, and tags will show as
    # created by the "GitHub Actions" user.
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

  with:
    # The location of a JSON file containing a `packages` property that specifies
    # the directories that contain `package.json` files, and that should be published.
    # This input is required, and will not be defaulted
    packages-config-file: ""

    # The NPM authentication token that the npm cli will be configured to use when publishing.
    # This input is required, and will not be defaulted
    npm-auth-token: ""

    # The url of the NPM registry that the packages in this repository should be published to.
    # Defaults to "registry.npmjs.org"
    npm-registry: ""

    # Boolean string indicating whether this action should perform a "dry run" 
    # which will not publish to NPM or push tags to GitHub.
    # Defaults to "false"
    dry-run: ""
```

## Building

Changes to this action are ultimately made in the `dist/index.js` file, which is consumed by the `action.yml` action definition.
This index file is compiled from the files in `src/` by running the `yarn build` script. This is also configured as a pre-commit
hook in the case that this file has not been re-compiled as part of a commit changing the `src/` directory.

Once a branch has been created with the changes to `dist/index.js`, the action can be run by referencing the specific branch
in the consuming workflow file. E.g.

```
- uses: Vertexvis/npm-publish-action@your-branch-name
```


