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
        momo_red: "#CC3233",
        momo_gray: "#333333",
        momo_bg: "#F3F1EA",
      },
      clipPath: {
        parallelogram_right: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
