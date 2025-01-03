import react from "eslint-plugin-react"
import prettier from "eslint-plugin-prettier"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended"
  ),
  {
    ignores: ["dist/"],
  },
  {
    plugins: {
      react,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "no-console": ["error", { allow: ["info", "warn", "error"] }],
      "tailwindcss/classnames-order": "error",
    },
  },
]
