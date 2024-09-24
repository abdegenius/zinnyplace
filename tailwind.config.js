/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#154618',
				dark: '#103512',
				secondary: '#adee68',
				light: '#f7fdf0'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
