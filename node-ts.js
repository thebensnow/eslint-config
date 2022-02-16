require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@bensnow/eslint-config/lib/base',
    '@bensnow/eslint-config/lib/typescript',
    '@bensnow/eslint-config/lib/node',
  ],
}
