/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#12161f',
          raised: '#1a2030',
          overlay: 'rgba(26, 32, 48, 0.72)',
        },
        ink: {
          DEFAULT: '#e8eaef',
          muted: '#94a3b8',
          faint: '#64748b',
        },
        accent: {
          DEFAULT: '#e8a849',
          light: '#f5c76a',
          dim: '#c4892e',
        },
        glow: {
          cyan: '#38bdf8',
          amber: '#fbbf24',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 40% 20%, rgba(232, 168, 73, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(56, 189, 248, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(232, 168, 73, 0.08) 0px, transparent 50%)',
        'hero-gradient': 'linear-gradient(135deg, #0c0f14 0%, #1a2030 40%, #0f172a 100%)',
      },
      boxShadow: {
        'glow-amber': '0 0 40px rgba(232, 168, 73, 0.15)',
        'glow-cyan': '0 0 40px rgba(56, 189, 248, 0.12)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(232, 168, 73, 0.1)',
      },
    },
  },
  plugins: [],
}
