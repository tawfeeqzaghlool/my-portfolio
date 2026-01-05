import { fileURLToPath } from "url";
import { dirname } from "path";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  {
    ignores: [".next/", "node_modules/", "pages/_document.js"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/jsx-key": "error",
      "react/no-unescaped-entities": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],

      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "@next/next/next-script-for-ga": "warn",
      "@next/next/no-unwanted-polyfillio": "error",

      "no-console": ["warn", { allow: ["debug", "info", "warn", "error"] }],
      "no-unused-vars": "off",
      eqeqeq: ["error", "always"],
      curly: "error",
      "no-duplicate-imports": "error",
      "prefer-const": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["**/components/*/*"],
              message: "Avoid nested component imports. Use app/components/* instead.",
            },
          ],
        },
      ],
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
