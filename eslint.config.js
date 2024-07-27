const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];
