import { fileURLToPath } from "url";
import { dirname } from "path";
import { FlatCompat } from "@eslint/eslintrc";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      // React and React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/jsx-key": "error",
      "react/no-unescaped-entities": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],

      // Next.js
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "@next/next/next-script-for-ga": "warn",
      "@next/next/no-unwanted-polyfillio": "error",

      // General JavaScript
      "no-console": ["warn", { allow: ["debug", "info", "warn", "error"] }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
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
  {
    ignores: [
      ".next/",
      "node_modules/",
      "pages/_document.js"
    ],
  },
];

export default eslintConfig;
