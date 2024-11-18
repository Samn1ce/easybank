/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				70: '70px',
			},
			backgroundImage: {
				buttonGradient: 'linear-gradient(to right, #31d35c, #2bb7da)',
			},
			fontFamily: {
				edu: ['"Edu AU VIC WA NT Pre"', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				public: ['"Public Sans"', 'sans-serif'],
			},
			zIndex: {
				15: '15',
			},
			backgroundColor: {
				darkBlue: '#2d314d',
			},
		},
	},
	plugins: [],
}
