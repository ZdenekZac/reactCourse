// prettier.config.js

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: [require("prettier-plugin-tailwindcss")],
  singleQuote: true,
};
