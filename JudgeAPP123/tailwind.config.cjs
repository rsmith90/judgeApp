/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#0369a1",
          "secondary": "#0f766e",
          "accent": "#4f46e5",
          "neutral": "#0c4a6e",
          "base-100": "#192a35",
          "info": "#7dd3fc",
          "success": "#2dd4bf",
          "warning": "#EFD8BD",
          "error": "#fca5a5",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.2s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "2px", // border width of buttons
          "--tab-border": "2px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        dark: {
          "primary": "#93c5fd",
          "secondary": "#a5b4fc",
          "accent": "#c4b5fd",
          "neutral": "#f5f5f4",
          "base-100": "#e0e7ff",
          "info": "#bfdbfe",
          "success": "#bbf7d0",
          "warning": "#fef9c3",
          "error": "#fecaca",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "3px", // border width of buttons
          "--tab-border": "3px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    container: {
      padding: {
        center: true,
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
