/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#080A0D',          // Main deep charcoal / near black
          surface: '#0E1116',     // Secondary surface
          panel: '#12161D',       // Slightly lighter section/panel
          card: '#0D1016',        // Card background
          cardHover: '#131822',   // Card hover background
          border: '#1A202C',      // Subtle dark border
          borderLight: '#242B3A', // Highlight border
          text: '#F4F3EF',        // Primary typography
          secondary: '#A9ADB5',   // Secondary typography
          muted: '#737983',       // Muted typography
          caption: '#555C68',     // Subdued caption
        },
        watchBlue: {
          primary: '#4DA3FF',     // Primary electric/cool blue accent
          soft: '#78BCFF',        // Soft blue highlight
          deep: '#1D5FA7',        // Deep blue supporting
          glow: 'rgba(77, 163, 255, 0.12)',
          glowStrong: 'rgba(77, 163, 255, 0.25)',
        },
        brand: {
          bronze: '#9C7A4A',
          bronzeMuted: '#6E5633',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'wider-label': '0.12em',
        'widest-tag': '0.22em',
      },
      boxShadow: {
        'subtle': '0 2px 12px rgba(0, 0, 0, 0.4)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'blue-glow': '0 0 24px rgba(77, 163, 255, 0.12)',
        'blue-glow-sm': '0 0 12px rgba(77, 163, 255, 0.18)',
        'blue-glow-btn': '0 0 16px rgba(77, 163, 255, 0.22)',
      },
      aspectRatio: {
        'watch': '4 / 5',
      },
      animation: {
        'sweep': 'sweep 60s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'dial-rotate': 'dialRotate 120s linear infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        dialRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
