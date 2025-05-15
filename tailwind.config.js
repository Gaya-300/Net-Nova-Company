// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          'marquee-right': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
        },
        animation: {
          'marquee-right': 'marquee-right 10s linear infinite',
        },
      },
    },
    variants: {},
    plugins: [],
  };
  