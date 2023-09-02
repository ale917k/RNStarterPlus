module.exports = {
  root: true,
  extends: [
    "plugin:markdown/recommended",
    "plugin:jsdoc/recommended",
    "plugin:fp/recommended",
    "plugin:array-func/recommended",
    "plugin:promise/recommended",
    "plugin:optimize-regex/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    // "pluv gin:tailwindcss/recommended",
    "@react-native",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:security/recommended",
    "prettier",
  ],
  plugins: ["fp", "cucumber", "@typescript-eslint", "react-native", "import", "react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [".eslintrc.js", "metro.config.js", "babel.config.js", "jest.config.js"],
  rules: {
    "unicorn/prevent-abbreviations": [
      "error",
      {
        ignore: ["Props$"],
      },
    ],
    "import/no-cycle": "error", // Disable cycled imports
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.{stories,test}.{ts,tsx}"],
      },
    ], // Allow devDependencies in stories and test files
    "@typescript-eslint/no-unused-vars": "warn", // Warn for any unused variables
    "react/react-in-jsx-scope": "off", // React v18 no longer requires React to be in scope for JSX
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }], // Prefer using arrow functions for named components
    "react-native/no-raw-text": ["error", { skip: ["Typography"] }], // Prevent using raw text outside of Text component except for 'Typography'
    "cucumber/async-then": "error", // Enforce step definitions to be either async functions, return a promise, or provide a callback function
    "cucumber/expression-type": "error", // Enforce using either Cucumber Expressions or Regular Expressions in step definitions
    "cucumber/no-restricted-tags": ["error", "wip"], // Prevent usage of restricted tags like 'wip'
  },
  overrides: [
    // Force PascalCase for React components
    {
      files: ["**/*.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
            ignore: ["^.+\\.(test|stories)\\.tsx$"],
          },
        ],
      },
    },
    // Disable FP rules for test files
    {
      files: ["*.test.tsx"],
      rules: {
        "fp/no-nil": "off",
        "fp/no-unused-expression": "off",
      },
    },
    // Allow unused expression to initialise RN app
    {
      files: ["index.js"],
      rules: {
        "fp/no-unused-expression": "off",
      },
    },
    // Allow default exports in index.ts
    {
      files: ["src/**/index.ts"],
      rules: {
        "no-restricted-exports": "off",
      },
    },
  ],
};
