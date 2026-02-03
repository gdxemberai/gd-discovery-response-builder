import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5E00',
          50: '#FFF5ED',
          100: '#FFE8D6',
          200: '#FFD0AC',
          300: '#FFB17A',
          400: '#FF8847',
          500: '#FF5E00',
          600: '#E55500',
          700: '#C24700',
          800: '#993800',
          900: '#7A2D00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
