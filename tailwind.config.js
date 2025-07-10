/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': '#3B82F6',        // Основной голубой
                'primary-light': '#93C5FD',  // Светлый голубой
                'primary-dark': '#2563EB',   // Темный голубой
                'purple-light': '#E6E6FA',
                'green-light': '#E6F7E6',
                'blue-light': '#E6F3FF',
                'pink-light': '#FFE6F0',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}