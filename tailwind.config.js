/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'neon-cyan': 'hsl(180, 100%, 50%)',
        'neon-blue': 'hsl(220, 100%, 60%)',
        'neon-pink': 'hsl(330, 100%, 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 0.7s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--neon-cyan)' },
        }
      },
    },
  },
  plugins: [],
}