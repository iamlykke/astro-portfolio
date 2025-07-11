export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': '#f97316',        // Orange-500 (основной оранжевый)
                'primary-light': '#fed7aa',
                'primary-dark': '#ea580c',   // Orange-600 (темный оранжевый)
                'secondary': '#f59e0b',      // Amber-500 (вторичный янтарный)
                'secondary-light': '#fbbf24', // Amber-400 (светлый янтарный)
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