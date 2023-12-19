/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important:true,
  safelist:[
    {
      pattern: /ui-bg-(.+)-(.+)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /ui-text-(.+)-(.+)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /ui-shadow(.*)/,
      variants: ['hover', 'focus'],
    },
    "ui-border"
  ],
  prefix:"ui-",
  theme: {
    extend: {},
  },
  plugins: [],
}

