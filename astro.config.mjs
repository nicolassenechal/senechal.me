// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://senechal.me',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Schibsted Grotesk',
			cssVariable: '--font-sans',
			weights: [500, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Helvetica Neue', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Source Serif 4',
			cssVariable: '--font-serif',
			weights: ['400 600'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'serif'],
			options: { experimental: { variableAxis: { opsz: [['8', '60']] } } },
		},
	],
});
