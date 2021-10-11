module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    strict: "off",
    "object-curly-newline": [
      "warn",
      {
        ObjectExpression: "always",
        ObjectPattern: { multiline: true },
        ImportDeclaration: "never",
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    "jsx-quotes": ["warn", "prefer-double"],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-trailing-spaces": ["warn"],
  },
};
