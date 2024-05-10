const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      color: {
        'biruprabowo' : '#3F67A4'
      }
    },
  },
  plugins: [ flowbite.plugin(), require('preline/plugin'),]
}