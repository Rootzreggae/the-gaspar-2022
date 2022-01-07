import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";




/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(
      {
        // if true, will split your app into multiple functions
        // instead of creating a single one for the entire app
        split: false
      }
    ),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
};

export default config;
