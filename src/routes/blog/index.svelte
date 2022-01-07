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

<div class="container mx-auto ">
    <h2>Every now and again, I write down my thoughts in this space.</h2>
    <h2>
        Product design, creativity, teamwork, productivity, and other topics are discussed.
    </h2>
    <br />
    <br />

   

    {#each posts as post}
        <h3>
            <a class="link link-primary" href={post.path}>
                {post.meta.title}
            </a>
        </h3>
        <br>
        Published {post.meta.date}
    {/each}
</div>

<style>
    .container {
       
        max-width: 1200px;
    }

    h2 {
        font-size: 2.6rem;
        line-height: 1.5;
    }
    h3 {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }

</style>
