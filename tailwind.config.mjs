/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#050A1F', // Darker blue background
				accent: '#7C3AED', // Vibrant purple
				'accent-blue': '#2563EB', // Vibrant blue
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
