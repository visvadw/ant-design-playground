## A playground / started for React and Ant Design library
It uses:
- hot reloading/browser-sync/redux devtools on dev build
- minify / chunkhash / trackJS on production build
- eslint (automatically triggered during dev and before a commit)
- unit test of react/redux
- es6/webapck
- sass support
- isomorphic-fetch
- mock data
- example app, currently used for demo-ing `antd` components

## Getting Started
### install
- Clone it: `git clone https://github.com/visvadw/ant-design-playground.git`
- Install the dependencies: `npm install`

### Scripts

```shell
# Start the dev server (with test/lint)
npm run start 

# start a simple mock server
npm run start:mock

# production start with browser-sync server
npm run start:prod

# build the production release
npm run build

# run the tests
npm run test

# generate test cover report
npm run test:cover

```

