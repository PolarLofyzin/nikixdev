import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import critters from 'astro-critters';
import unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		prefetch({
			throttle: 3,
		}),
		critters(),
		unocss(),
	],
	site: 'https://niskii.dev',
});
