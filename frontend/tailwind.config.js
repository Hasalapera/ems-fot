/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fot: {
                    maroon: '#800000',
                    teal: '#008080',
                    blue: '#0000EE',
                    gold: '#8B8000',
                },
            },
        },
    },
    plugins: [],
}