import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
          dark: {
            DEFAULT: '#0F0F1A',
            light: '#1A1A2E',
          },
          amber: {
            DEFAULT: '#F59E0B',
            dark: '#D97706',
            light: '#FEF3C7',
            border: '#B45309',
          },
          ink: {
            DEFAULT: '#1F1F2E',
            light: '#52525B',
            muted: '#A1A1AA',
          },
          surface: {
            DEFAULT: '#FAFAFA',
            card: '#FFFFFF',
            hover: '#F4F4F5',
          },
        border: '#1F1F2E',
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #1F1F2E',
        'brutal-sm': '2px 2px 0px 0px #1F1F2E',
        'brutal-hover': '6px 6px 0px 0px #F59E0B',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
