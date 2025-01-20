/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html", // Include the Vite root HTML
    "./src/**/*.{js,jsx,ts,tsx}", 
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
  
    forumNormal:['Quicksand','serif'],
    body: [
      'Source Sans Pro', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
  },
  fontWeight: {
    100: "100",
    400: "400",
    500: "500", // Added for medium weight
    600: "600", // Added for bold weight
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
