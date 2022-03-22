import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [
		sitemap(),
		tailwind(),
	],
	buildOptions: {
		site: "https://kjmalek.info",
		sitemap: true,
		pageUrlFormat: 'file',
	},
	vite: {
		ssr: {
			external: ["svgo"],
		},
	},
});
