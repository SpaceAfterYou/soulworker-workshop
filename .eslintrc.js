/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/*.vue", "**/*.mjs", "**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts"],
      extends: [
        "eslint:recommended",

        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "plugin:tailwindcss/recommended",
        "plugin:security/recommended",

        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier",

        "./.eslintrc-auto-import.json",
      ],
      plugins: ["@typescript-eslint"],
      parserOptions: {
        ecmaVersion: "latest",
      },
      rules: {
        "no-var": "error",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "comma-dangle": ["error", "only-multiline"],
      },
      globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
      },
    },
  ],
  ignorePatterns: ["src/api/gql/**/*.ts"],
};
