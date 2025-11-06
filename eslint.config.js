import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import { defineConfig, globalIgnores } from "eslint/config";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig([
  // ignore build output, lockfiles, and assets
  globalIgnores([
    "dist",
    "build",
    "coverage",
    "*.min.*",
    "node_modules",
    "public",
  ]),
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["**/*.d.ts"], // just in case
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite, // enables Fast Refresh-safe rules for Vite
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        node: { extensions: [".js", ".jsx"] },
      },
    },
    rules: {
      /* General hygiene */
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^[A-Z_]" },
      ],
      "no-console": isProd ? ["error", { allow: ["warn", "error"] }] : "off",
      "no-debugger": isProd ? "error" : "off",

      /* Import rules */
      "import/first": "error",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "warn",
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"],
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      /* Accessibility tweaks */
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-autofocus": "off",

      /* React Hooks (already from preset, but locking strictness) */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  // Test files: relaxed rules for dev tooling/specs
  {
    files: ["**/*.{spec,test}.{js,jsx}"],
    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
]);
