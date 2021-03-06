module.exports = {
  extends: ["airbnb-base", "plugin:react/recommended", "react-app", "prettier"],
  plugins: ["eslint-plugin-import-order-alphabetical", "prettier"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "object-curly-newline": 0,
    "function-paren-newline": 0,
    "max-len": ["error", { code: 80, tabWidth: 2 }],
    "linebreak-style": ["error", "unix"],
    "no-cond-assign": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "arrow-body-style": ["error", "as-needed"],
    "implicit-arrow-linebreak": 0,
    "no-unused-vars": "error",
    "no-console": "off",
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "prettier/prettier": "error",
    "import/no-unresolved": ["error", { caseSensitive: false }],
    semi: ["error", "never"]
  },
  globals: {
    context: "readonly",
    it: "readonly",
    cy: "readonly",
    Cypress: "readonly",
    gtag: "readonly",
    chrome: "readonly",
    jest: "readonly"
  },
  env: {
    browser: true,
    node: true
  }
};
