import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        swift: {
          bg: '#0a0a0f',
          surface: '#12121a',
          elevated: '#1a1a26',
          border: '#2a2a3a',
          'border-hover': '#3a3a50',
          text: '#f0f0f5',
          muted: '#a0a0b8',
          dim: '#6a6a80',
          blue: '#64a5ff',
          'blue-hover': '#89bfff',
          'blue-muted': '#1e2a4a',
          orange: '#f05138',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
