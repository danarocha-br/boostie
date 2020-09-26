module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jest",
    "prettier",
    "react-hooks",
    "import-helpers",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/camelcase": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "import/no-duplicates": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "/^react$/",
          "module",
          ["parent", "sibling", "index", "/^@shared/skylab/"],
          ["/^~/"],
        ],
        alphabetize: { order: "ignore", ignoreCase: true },
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
