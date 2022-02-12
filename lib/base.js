/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: { es2022: true },
  overrides: [
    // BRS: Lint eslint config files as node (eliminates no-undef for module & require)
    {
      files: ['.eslintrc.js'],
      env: {
        node: true,
      },
    },
  ],
}
