/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('/assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        primary: {
          // Marine blue: for next step
          marine: "hsl(213, 96%, 18%)",
          // Purplish blue: purple
          purplish: "hsl(243, 100%, 62%)",
          // Pastel blue
          pastel: "hsl(228, 100%, 84%)",
          // Light blue: navigation active
          light: "hsl(206, 94%, 87%)",
          // Strawberry red
          strawberry: "hsl(354, 84%, 57%)",
        },
        neutral: {
          // Cool gray
          coolGray: "hsl(231, 11%, 63%)",
          // Light gray
          lightGray: "hsl(229, 24%, 87%)",
          // Magnolia
          magnolia: "hsl(217, 100%, 97%)",
          // Alabaster
          alabaster: "hsl(231, 100%, 99%)",
          // White
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  variants: {
    backgroundImage: ["responsive"],
  },
  plugins: [],
};
