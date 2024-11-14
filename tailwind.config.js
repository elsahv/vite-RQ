/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#CDD1E2",
        teal: "#008080",
        munsell: "#0792a5",
        cerulean: "#007ba5",
        onyx: "#313638",
        aquamarine: "#7FFFD4",
        platinum: "#E5E5E5",
        coral: "#FF7F50",
        seasalt: "#f9f9f9",
        test1: "pink",
        test2: "lightgreen",
      },
    },
  },
  plugins: [],
};
