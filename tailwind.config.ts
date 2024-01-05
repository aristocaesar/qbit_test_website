import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
        '2xl': '6rem',
      },
      center: true,
    },
    colors: {
      'coral-red': {
        '50': '#fff1f2',
        '100': '#ffe0e3',
        '200': '#ffc6cb',
        '300': '#ff9ea6',
        '400': '#ff6774',
        '500': '#fc3748',
        '600': '#ea182a',
        '700': '#c51020',
        '800': '#a3111e',
        '900': '#861620',
        '950': '#49060c',
      },
      white: {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
    },
  },
  plugins: [],
};
export default config;
