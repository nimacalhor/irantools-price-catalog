import type { Config } from "tailwindcss";

const config: Config =
  /** @type {import('tailwindcss').Config} */
  (module.exports = {
    // darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          // orange
          "border-orange": "hsl(var(--border-orange))",
          "input-orange": "hsl(var(--input-orange))",
          "ring-orange": "hsl(var(--ring-orange))",
          "background-orange": "hsl(var(--background-orange))",
          "foreground-orange": "hsl(var(--foreground-orange))",
          //
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          // orange
          "primary-orange": {
            DEFAULT: "hsl(var(--primary-orange))",
            foreground: "hsl(var(--primary-orange-foreground))",
          },
          "secondary-orange": {
            DEFAULT: "hsl(var(--secondary-orange))",
            foreground: "hsl(var(--secondary-orange-foreground))",
          },
          "destructive-orange": {
            DEFAULT: "hsl(var(--destructive-orange))",
            foreground: "hsl(var(--destructive-orange-foreground))",
          },
          "muted-orange": {
            DEFAULT: "hsl(var(--muted-orange))",
            foreground: "hsl(var(--muted-orange-foreground))",
          },
          "accent-orange": {
            DEFAULT: "hsl(var(--accent-orange))",
            foreground: "hsl(var(--accent-orange-foreground))",
          },
          "popover-orange": {
            DEFAULT: "hsl(var(--popover-orange))",
            foreground: "hsl(var(--popover-orange-foreground))",
          },
          "card-orange": {
            DEFAULT: "hsl(var(--card-orange))",
            foreground: "hsl(var(--card-orange-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        fontFamily: {
          roboto: [`var(--font-roboto)`],
          iransans: [`var(--font-iransans)`],
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  });
export default config;
