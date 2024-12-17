import { Inter } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        geistmono: ['var(--font-geist-mono)'],
        geistsans: ['var(--font-geist-sans)'],
        greatvibes: ['var(--font-greatvibes)'], 
        luckiestguy: ['var(--font-luckiestguy)'],
        inter: ['var(--font-inter)']
        
    }
  }
},
  plugins: [],
} satisfies Config;
