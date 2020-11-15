# Codeching - NPM TEST PACKAGE

## How to build

- If **"dist" folder** doesn't exist in root directory, create an empy one before build.
- Run "**npm run build**" command from your command line interface.

After you run the build command, the dist folder will contain the package content which
you can pubish to npm.

## How to publish the package

The package is used via GitLab's NPM registry. You need a deploy token for publishing,
so please require your deploy token from the project owner.

### Publish steps:

- **setup your .npmrc file** in your home folder in the following way:

```
@codeching:registry=https://git.xxx.com/api/v4/packages/npm/
//git.xxx.com/api/v4/packages/npm/:_authToken="${YOUR_TOKEN}"
//git.xxx.com/api/v4/projects/${PROJECT_ID}/packages/npm/:_authToken="${YOUR_TOKEN}"
```

(`${PROJECT_ID}`: You can find this project id under the project's name on GitLab)

- run "**npm publish**" command from your command line interface.

## How to use the component:

The package is used via GitLab's NPM registry. You need a deploy token to use the package,
so please require your token from the project owner.

- **setup your .npmrc file** in your home folder in the following way:

```
@codeching:registry=https://git.xxx.com/api/v4/packages/npm/
//git.xxx.com/api/v4/packages/npm/:_authToken="${YOUR_TOKEN}"
//git.xxx.com/api/v4/projects/${PROJECT_ID}/packages/npm/:_authToken="${YOUR_TOKEN}"
```

(`${PROJECT_ID}`: You can find this project id under the project's name on GitLab.

- Add the dependency to your package.json file in your project for.e.g. version 0.1.0+

```
    "@codeching/my-npm-test-package": "^1.0.0"
```

- run "**npm i**" command from your command line interface.

## Peer dependencies

You must have the following packages installed in your main project where you will use the
package:

- "react": "16.x",
- "react-dom": "16.x",
- "react-scripts": "3.x"

## Important rules

The package uses the **babel-plugin-inline-react-svg** babel plugin to transform the

```
import { ReactComponent as EyeClosed } from './eye_closed.svg';
```

to

```
var EyeClosed = function EyeClosed(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.12 14.12a2.998 2.998 0 0 1-5.194-2.098A3 3 0 0 1 9.88 9.88m8.06 8.06A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94l11.88 11.88zM9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.494 18.494 0 0 1-2.16 3.19L9.9 4.24zM1 1l22 22",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

EyeClosed.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
```

**Please don't use default export with SVGs**, otherwise they won't transform to proper component in your
React component!!!

If you would like to export multiple SVG-s in an index file, use the following format:

```
import { ReactComponent as CheckIcon } from './check_icon.svg';
import { ReactComponent as EyeClosed } from './eye_closed.svg';
...

export {
  CheckIcon,
  EyeClosed,
  ...
```

**Please don't use absolute imports in the project with jsconfig.json, use relative imports instead!!!**
