require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@bensnow/eslint-config/lib/base',
    '@bensnow/eslint-config/lib/javascript',
    '@bensnow/eslint-config/lib/node',
  ],
}
