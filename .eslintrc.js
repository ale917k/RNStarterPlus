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
    "plugin:@typescript-eslint/all",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react-redux/recommended",
    "plugin:tailwindcss/recommended",
    "@react-native",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:react-native-a11y/all",
    "plugin:security/recommended",
    "prettier",
  ],
  plugins: [
    "fp",
    "cucumber",
    "@typescript-eslint",
    "react-native",
    "import",
    "react",
    "react-redux",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "metro.config.js",
    "babel.config.js",
    "jest.config.js",
    "tailwind.config.js",
  ],
  rules: {
    // Javascript

    // Warns when callbacks are used instead of async/await
    "promise/prefer-await-to-callbacks": "warn",

    // Warns when using .then() instead of async/await
    "promise/prefer-await-to-then": "warn",

    // Errors when variable updates are not atomic, risking race conditions
    "require-atomic-updates": "error",

    // Warns when console.* methods are used
    "no-console": "warn",

    // Warns when process.env is used
    "no-process-env": "warn",

    // Made redundant by fp/no-nil
    "unicorn/no-null": "off",

    // React and JSX

    // Recommends destructuring objects when possible
    "prefer-destructuring": ["warn", { object: true, array: false }],

    // Sorts JSX props based on given criteria.
    "react/jsx-sort-props": ["warn", { callbacksLast: true, shorthandFirst: true }],

    // Enforces stateless functional components when possible
    "react/prefer-stateless-function": "error",

    // Enforces specific function definition style for named components
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],

    // Disables the requirement to import React in JSX files
    "react/react-in-jsx-scope": "off",

    // React Native

    // Warns against using color literals in style objects
    "react-native/no-color-literals": "warn",

    // Warns against single-element style arrays
    "react-native/no-single-element-style-arrays": "warn",

    // Errors when using raw text outside of a `<Text>` component
    "react-native/no-raw-text": ["error", { skip: ["Typography"] }],

    // TypeScript

    // Enforces consistent usage of object type definitions
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    // Disabled as it gets messy with react prop types
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",

    // Code Quality and Maintainability

    // Errors if code complexity exceeds a certain limit
    complexity: ["error", 10],

    // Limits the number of function parameters
    "max-params": ["error", 3],

    // Limits nesting depth
    "max-depth": ["error", 4],

    // Warns against the use of magic numbers
    "no-magic-numbers": "warn",

    // Warns against implicit type coercion
    "no-implicit-coercion": "warn",

    // Disallows floating decimals like `.2`
    "no-floating-decimal": "error",

    // Disallows assignments where both sides are exactly the same
    "no-self-assign": "error",

    // Errors if an expression is unused
    "no-unused-expressions": "error",

    // Enforce arrow function body style
    "arrow-body-style": ["warn", "as-needed"],

    // Warns to have a new line before a return statement
    "newline-before-return": "warn",

    // Warns against using negated conditions
    "no-negated-condition": "warn",

    // Enforces naming convention for caught errors
    "unicorn/catch-error-name": ["warn", { name: "err" }],

    // Errors if abbreviations are used besides Props
    "unicorn/prevent-abbreviations": ["error", { ignore: ["Props$"] }],

    // Errors on extraneous dependencies.
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.{stories,test}.{ts,tsx}"] },
    ],

    // Testing

    // Enforce step definitions to be either async functions, return a promise, or provide a callback function
    "cucumber/async-then": "error",

    // Enforce using either Cucumber Expressions or Regular Expressions in step definitions
    "cucumber/expression-type": "error",

    // Prevent usage of restricted tags like 'wip'
    "cucumber/no-restricted-tags": ["error", "wip"],
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
    {
      files: ["*.test.tsx"],
      rules: {
        // Disable FP rules for test files
        "fp/no-nil": "off",
        "fp/no-unused-expression": "off",
      },
    },
    {
      files: ["index.js"],
      rules: {
        // Allow unused expression to initialise RN app
        "fp/no-unused-expression": "off",
      },
    },
    {
      files: ["src/**/index.ts"],
      rules: {
        // Allow default exports in index.ts
        "no-restricted-exports": "off",
      },
    },
  ],
};
