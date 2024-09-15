// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  trailingComma: "none",
  arrowParens: "avoid",
  tabWidth: 2,
  useTabs: false,
  semi: false,
  printWidth: 80,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports"
  ],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "^@/hooks/(.*)$",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",
    "^@/env.mjs",
    "^[./]"
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
