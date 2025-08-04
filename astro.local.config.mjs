import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import yaml from '@rollup/plugin-yaml';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			configFile: './tailwind.kia.js'
		}),
		sitemap(),
		robots({
			policy: [
				{
					userAgent: ["*"],
					allow: ["/"],
					disallow: ["/?*"],
				},
			  ],
		}),
		alpinejs(),
		mdx(),
		icon(),
		react(),
	],
	redirects: {
		'/service-request/': {
			status: 301,
			destination:'https://service.kia-samara.ru/?utm_source=promo'
		},
		'/sportage/': {
			status: 301,
			destination:'/models/sportage/'
		},
		'/k5/': {
			status: 301,
			destination:'/models/k5//'
		},
		'/sorento/': {
			status: 301,
			destination:'/models/sorento2024/'
		},
		'/seltos/': {
			status: 301,
			destination:'/models/seltos/'
		},
		'/soul/': {
			status: 301,
			destination:'/models/soul/'
		},
	},
	vite: {
		plugins: [yaml()],
		css: {
			preprocessorOptions: {
			  	scss: {
					silenceDeprecations: ['legacy-js-api'],
				},
			},
		},
	},
	site: 'https://alexsab-ru.github.io',
	base: '/'
});
