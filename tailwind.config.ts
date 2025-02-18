import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', ...fontFamily.sans],
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        kanit: ['var(--font-kanit)', ...fontFamily.sans]
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
