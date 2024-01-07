import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		backgroundImage: {
			"header-pattern": "url('/assets/desktop/bg-pattern-header.svg')",
		},
	},
	plugins: [],
};
export default config;
