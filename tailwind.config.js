/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                montez: ["Montez", "cursive"],
            },
            colors: {
                c1a: "#509E2F",
                c12: "#84BD00",
            },
        },
    },
    plugins: [],
};
