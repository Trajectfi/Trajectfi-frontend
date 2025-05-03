import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: {
          500: "#8855FF",
          600: "#7040E0",
          700: "#5C30C0",
        },
        gray: {
          800: "#1A1A2E",
        },
      },
      backgroundImage: {
        'page-bg': "url('/images/bg-image.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
