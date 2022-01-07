<script context="module">
    export const load = async ({ page, fetch }) => {
      const currentCategory = page.params.category
      const response = await fetch('/api/posts.json')
      const posts = await response.json()
      
      const matchingPosts = posts
        .filter(post => post.meta.categories.includes(currentCategory))
  
      return {
        props: {
          category: currentCategory,
          posts: matchingPosts
        }
      }
    }
  </script>

<script>
    export let category;
    export let posts = [];
</script>



<div class="container mx-auto">
    <h1>Posts in {category}:</h1>
    {#if posts.length}
    {#each posts as post}
        <h2>
            <a class="link link-primary" href={post.path}>
                {post.meta.title}
            </a>
        </h2>
        Published {post.meta.date}
    {/each}
{:else}
    <h2>Sorry, no posts found matching that category.</h2>
{/if}
</div>

<style>
    .container {
        max-width: 1200px;
        line-height: 2em;
        font-size: 1.5em;
       
    }
  
</style>
