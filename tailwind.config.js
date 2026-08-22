/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        // Extraídas do logo: teal #3D9BA5 e verde-limão #9CC832
        brand: {
          50: '#F0F9FA',
          100: '#DAF0F3',
          200: '#B5E1E7',
          300: '#83C9D3',
          400: '#54AFBB',
          500: '#3D9BA5',
          600: '#317D87',
          700: '#2A656E',
          800: '#26535A',
          900: '#22464C',
          950: '#102A2F',
        },
        lima: {
          50: '#F7FBEA',
          100: '#EDF6CD',
          200: '#DCEEA1',
          300: '#C4E26B',
          400: '#AED445',
          500: '#9CC832',
          600: '#7BA023',
          700: '#5D7A1F',
          800: '#4B611E',
          900: '#40521E',
        },
        areia: {
          50: '#FBFAF7',
          100: '#F5F2EA',
          200: '#EAE4D6',
        },
        tinta: {
          DEFAULT: '#16262A',
          suave: '#4A5C60',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        suave: '0 1px 2px rgba(22,38,42,.04), 0 8px 24px -8px rgba(22,38,42,.10)',
        alta: '0 2px 4px rgba(22,38,42,.04), 0 24px 48px -16px rgba(22,38,42,.18)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(.85)', opacity: '.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'flutuar': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.16,1,.3,1) both',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(.24,0,.38,1) infinite',
        'flutuar': 'flutuar 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
