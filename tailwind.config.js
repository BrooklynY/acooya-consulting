/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// Acooya Original Brand Colors (from logo + brand reference)
				primary: {
					DEFAULT: '#3498DB',  // Bright Blue (from brand image)
					dark: '#447EB8',     // Deep Blue (from logo)
					light: '#5DADE2',    // Sky Blue (from brand image)
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: '#F39C12',  // Amber/Orange (from brand image + logo)
					dark: '#F2AF4A',    // Logo Orange
					light: '#F5B041',   // Light Orange
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: {
					DEFAULT: '#E91E63',  // Magenta (from brand image)
					dark: '#D55491',    // Logo Pink
					light: '#F06292',   // Light Pink
					foreground: 'hsl(var(--accent-foreground))',
				},
				success: {
					DEFAULT: '#2ECC71', // Emerald Green (from brand image + logo)
					dark: '#66AB4E',    // Logo Green
					light: '#58D68D',   // Light Green
					foreground: 'hsl(var(--success-foreground))',
				},
				brand: {
					blue: '#3498DB',
					blueDark: '#447EB8',
					orange: '#F39C12',
					orangeDark: '#F2AF4A',
					green: '#2ECC71',
					greenDark: '#66AB4E',
					pink: '#E91E63',
					pinkDark: '#D55491',
					dark: '#1A1A1B',
					charcoal: '#555555',
					light: '#D1D1D1',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
