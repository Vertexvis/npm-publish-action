# npm-publish-action

This repository contains the definition for a custom [GitHub Action](https://help.github.com/en/actions/creating-actions/about-actions)
that will perform a diff between the current HEAD and HEAD~1 of the branch it is run on, and look for
differences in the `package.json` versions for each of the packages specified in a `lerna.json`'s `packages` property.

## Usage

Because this action refers to the commit prior to the commit being evaluated for publishing,
more history than the typical checkout provides is necessary. This can be done through the `fetch-depth`
input for the [`actions/checkout`](https://github.com/actions/checkout) action:

```
- uses: actions/checkout@v2
  with:
    fetch-depth: 2
```

After the correct history is configured, the publish action can be run. This will require at minimum the usage of the default
[GITHUB_TOKEN](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token), and 
an [NPM authentication token](https://docs.npmjs.com/about-authentication-tokens) for `registry.npmjs.org`

```
- uses: Vertexvis/npm-publish-action@v1
  env:
    # The GitHub token that will be used to create tags corresponding to this release.
    # By default, the ${{ secrets.GITHUB_TOKEN }} can be used, and tags will show as
    # created by the "GitHub Actions" user.
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

  with:
    # The url of the NPM registry that the packages in this repository should be published to.
    # Defaults to "registry.npmjs.org"
    npm-registry: ""

    # The NPM authentication token that the npm cli will be configured to use when publishing.
    # This input is required, and will not be defaulted
    npm-auth-token: ""

    # Boolean string indicating whether this action should perform a "dry run" 
    # which will not publish to NPM or push tags to GitHub
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


