/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
import tailwindAnimated from "tailwindcss-animated";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      amsipro: "AmsiPro, sans-serif",
    },
    dropShadow: {
      "black-sm": "var(--drop-shadow-sm)",
      "black-md": "var(--drop-shadow-md)",
      "black-lg": "var(--drop-shadow-lg)",
      "light-md": "var(--drop-shadow-light-md)",
      "medium-sm": "var(--drop-shadow-medium-sm)",
    },
    boxShadow: {
      "none": "transparent",
      "light-sm": "var(--shadow-light-sm)",
      "light-md": "var(--shadow-light-md)",
      "medium-sm": "var(--shadow-medium-sm)",
      "medium-md": "var(--shadow-medium-md)",
      "dark-sm": "var(--shadow-dark-sm)",
      "dark-md": "var(--shadow-dark-md)",
    },
    fontSize: {
      "2xs": "var(--text-2xs)",
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      md: "var(--text-md)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      "2xl": "var(--text-2xl)",
      "3xl": "var(--text-3xl)",
    },
    borderRadius: {
      "2xs": "var(--border-radiuns-2xs)",
      sm: "var(--border-radius-sm)",
      md: "var(--border-radius-md)",
      lg: "var(--border-radius-lg)",
      xl: "var(--border-radius-xl)",
      full: "var(--border-radius-full)",
      none: "var(--border-radius-none)",
    },
    extend: {
      backgroundImage: () => ({
        "primary-gradient-linear": "var(--gradient-primary-linear)",
        "secondary-gradient-linear": "var(--gradient-secondary-linear)",
        whatsapp: "var(--gradient-whatsapp)",
        "secondary-gradient-radius": "var(--gradient-secondary-radius)",
        "gradient-green-linear": "var(--gradient-green-linear)",
        "gradient-secondary-radius-transparent": "var(--gradient-secondary-radius-transparent)"
      }),

      colors: {
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-500": "var(--primary-500)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",

        "secondary-300": "var(--secondary-300)",
        "secondary-500": "var(--secondary-500)",
        "secondary-700": "var(--secondary-700)",
        "secondary-900": "var(--secondary-900)",

   
      },
 
    },
  },
  plugins: [tailwindAnimated, flowbitePlugin],
};
