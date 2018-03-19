module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react"
  ],
  "env": {
    "jest": true,
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "eol-last": [0],
    "eqeqeq": ["error", "always"],
    "getter-return": ["error", { "allowImplicit": true }],
    "indent": ["warn", 2],
    "no-template-curly-in-string": "error",
    "semi": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "max-len": ["warn", 100],
    "no-duplicate-imports": "error",
    "no-mixed-requires": [0],
    "no-underscore-dangle": [0],
    "no-unused-vars": "error",
    "id-blacklist": ["error", "err", "e", "cb", "callback", "payload", "obj", "arr"],
    "max-depth": ["warn", 4]
  },
  "globals": {
    "expect": true
  }
}