/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        screens: {
            xl: '1440px',
            lg: '1200px',
            md: '768px',
            sm: '640px',
            xs: '480px',
        },
        extend: {
            colors: {
                dark: '#000000',
                dark2: '#17191f',
                primary: 'rgb(23, 105, 255)',
                'primary-accent': 'rgb(11, 59, 183)',
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
