module.exports = {
	mode: 'jit',
	purge: ['*.html', '*.js', './css/*.css'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				red: 'hsl(0, 100%, 68%)',
				'very-dark-blue': 'hsl(230, 29%, 20%)',
				'dark-grayish-blue': 'hsl(230, 11%, 40%)',
				'grayish-blue': 'hsl(231, 7%, 65%)',
				'light-grayish-blue': 'hsl(207, 33%, 95%)',
			},
			fontFamily: {
				barlow: "'Barlow', sans-serif",
				'barlow-condensed': "'Barlow condensed', sans-serif",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
