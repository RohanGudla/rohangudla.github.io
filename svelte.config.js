import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        paths: {
            base: dev ? '' : '/rohangudla.github.io'
        },
        inlineStyleThreshold: 10240,
        router: false,
        hydrate: false,
        target: '#svelte'
    }
};

export default config;
