// @ts-check

/** @type {import("prettier").Config} */
export default {
  multilineArraysWrapThreshold: 0,
  overrides: [
    {
      files: [
        "with-tailwind-plugin.ts",
      ],
      options: {
        plugins: [
          "prettier-plugin-multiline-arrays",
          "prettier-plugin-jsdoc",
          "prettier-plugin-tailwindcss",
        ],
      },
    },
    {
      files: [
        "no-tailwind-plugin.ts",
      ],
      options: {
        plugins: [
          "prettier-plugin-multiline-arrays",
          "prettier-plugin-jsdoc",
        ],
      },
    },
  ],
};
