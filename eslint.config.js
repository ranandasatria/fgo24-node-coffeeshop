import js from "@eslint/js";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { languageOptions: {
    globals: {
      console: "readonly",
      process: "readonly",
      setTimeout: "readonly",
      clearTimeout: "readonly"
    },
  }},
  { rules: {
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "eqeqeq": ["warn", "always"],
    "comma-spacing": ["warn", { after: true }],
    "no-redeclare": "error",
    "no-undef": "off"
    // "no-unused-vars": "off"
  }}
]);