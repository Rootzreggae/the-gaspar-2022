const config = {
  layout: {
    blog: "./src/blog/blogLayout.svelte"
  }, 
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
};

export default config;
