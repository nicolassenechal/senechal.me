// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://senechal.me',
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Newsreader',
			cssVariable: '--font-body',
			weights: ['400 700'],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'serif'],
		},
	],
});
