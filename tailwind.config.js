/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      colors: {
        "primary-color": "#F53E32",
        "secondary-color": "#3BB77E",
        "cus-blue": "#67BCEE",
        "cus-pink": "#F74B81",
        "cus-orrange": "#F59758",
        "primary-text": "#2B2B2D",
        "secondary-text": "#777777",
        "border-color": "#e9e9e9",
      },
      fontFamily: {
        "poppins": [`var(--font-poppins)`],
        "arial": [`var(--font-arial)`],
        "lato": [`var(--font-lato)`],
        "manrope": [`var(--font-manrope)`],
      }
    },
  },
  plugins: [],
}
