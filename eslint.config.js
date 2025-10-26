import js from "@eslint/js";
import globals from "globals";
import noOnlyTests from "eslint-plugin-no-only-tests";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
   plugins: {
  "no-only-tests": noOnlyTests
     },
    extends: [js.configs.recommended], 
    rules: {
      semi: "error",
      "prefer-const": "warn",
       "no-only-tests/no-only-tests": "error",
    },
    languageOptions: {
      globals: {
      ...globals.browser,
      ...globals.node,
      },
    },
  },
]);