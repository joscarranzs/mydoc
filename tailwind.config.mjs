import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', '"Roboto"', ...defaultTheme.fontFamily.sans],
        display: ['"Google Sans"', '"Roboto"', ...defaultTheme.fontFamily.sans],
        mono: ['"Roboto Mono"', '"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        gblue: {
          DEFAULT: '#1A73E8',
          dark: '#1557B0',
          light: '#E8F0FE',
          50: '#E8F0FE',
          100: '#D2E3FC',
          200: '#AECBFA',
          700: '#1967D2',
          800: '#185ABC',
          900: '#174EA6',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F9FA',
          hover: '#F1F3F4',
        },
      },
      boxShadow: {
        'google-sm': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'google': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'google-lg': '0 1px 3px 0 rgba(60,64,67,0.3), 0 8px 16px 4px rgba(60,64,67,0.15)',
      },
      borderRadius: {
        'google': '8px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
