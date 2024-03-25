/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      gridTemplateColumns: {
        cart: "minmax(400px, 700px) minmax(300px, 350px)",
      },
      gridTemplateRows: {
        cart: "repeat(4, 120px)",
      },
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        "background-white": "hsl(var(--background-white))",
        "background-black": "hsl(var(--background-black))",
        "background-orange": "hsl(var(--background-orange))",
        "background-orange-second": "hsl(var(--background-orange-second))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          orange: "hsl(var(--primary-orange))",
          "orange-second": "hsl(var(--primary-orange-second))",
          foreground: "hsl(var(--primary-foreground))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          second: "hsl(var(--orange-second))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
      },
      borderColor: {
        input: "var(--border-input)",
        destructive: "hsl(var(--destructive))",
        foreground: "var(--border-foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        popover: "var(--popover-shadow)",
        card: "var(--card-shadow)",
      },
    },
  },
  plugins: [],
};
