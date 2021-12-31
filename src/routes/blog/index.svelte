<script context="module">
    export async function load({ fetch }) {
        const posts = await fetch("/api/posts.json");
        const allPosts = await posts.json();

        return {
            props: {
                posts: allPosts,
            },
        };
    }
</script>

<script>
    export let posts;
</script>

<div class="container mx-auto">
    {#each posts as post}
        <h2>
            <a href={post.path}>
                {post.meta.title}
            </a>
        </h2>
        Published {post.meta.date}
    {/each}
</div>

<style>
    .container {
        background-color: violet;
    }
    h2 {
        font-size: 3em;
    }
</style>
