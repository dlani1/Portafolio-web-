/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
    ],
    theme: {
        extend: { 
            colors: {
                'brand-dark': '#111111',
                'brand-gray': '#222222',
                'brand-light': '#F5F5F5',
                'brand-red': '#E53E3E',
                'brand-green': '#48BB78',
            }
        },
    },
    plugins: [],
}