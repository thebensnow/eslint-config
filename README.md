# @bensnow/eslint-config

My ESLint config to share between projects.

# How to use

## Javascript for Node:

Javascript for node is the default configuration so you only need to use the
scope when specifying the configuration to extend.

.eslintrc.js:

```javascript
module.exports = {
  extends: ['@bensnow'],
}
```

## Typescript for Node:

Extend the config and configure the location of your typescript config file for
type checking. Check
[here](https://typescript-eslint.io/docs/linting/type-linting) for more
information.

.eslintrc.js:

```javascript
module.exports = {
  extends: ['@bensnow/eslint-config/node-ts'],
  parserOptions: { tsConfigRootDir: __dirname, project: 'tsconfig.json' },
}
```

# Notes

Typescript is included as a dev dependency to make code completion work in VS
Code with latest yarn. See https://yarnpkg.com/getting-started/editor-sdks
