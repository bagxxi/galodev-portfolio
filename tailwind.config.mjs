/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Tokyo Night Color Palette - now using CSS variables
				'void': 'var(--color-void)',
				'surface': {
					DEFAULT: 'var(--color-surface)',
					light: 'var(--color-surface-light)',
					lighter: 'var(--color-surface-lighter)'
				},
				'accent': {
					cyan: 'var(--color-accent-cyan)',
					magenta: 'var(--color-accent-magenta)',
					violet: 'var(--color-accent-violet)',
					pink: 'var(--color-accent-pink)',
					green: 'var(--color-accent-green)',
					orange: 'var(--color-accent-orange)',
					blue: 'var(--color-accent-blue)'
				},
				'text': {
					DEFAULT: 'var(--color-text)',
					muted: 'var(--color-text-muted)',
					bright: 'var(--color-text-bright)'
				}
			},
			fontFamily: {
				'display': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
				'body': ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
				'mono': ['"JetBrains Mono"', 'monospace']
			},
			animation: {
				'fade-in': 'fadeIn 0.3s ease-out',
				'slide-up': 'slideUp 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
				'typing': 'typing 3.5s steps(40, end)'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				typing: {
					'from': { width: '0' },
					'to': { width: '100%' }
				}
			},
			backgroundImage: {
				'dot-grid': 'radial-gradient(circle, rgba(125, 207, 255, 0.15) 1px, transparent 1px)',
			},
			backgroundSize: {
				'dot-grid': '24px 24px'
			}
		},
	},
	plugins: [],
}
