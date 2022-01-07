<script>
    export let title;
    export let date;
    export let categories;
</script>

<div class="container mx-auto text-xs md:text-sm px-4">
    <h1 class="flex justify-center">{title}</h1>
    <br />
    <p class="flex justify-center">Published: {date}</p>
    <br />
    <br />

    <slot />
    <br />
    {#if categories.length}
        <aside>
            <p>Posted in:</p>
            <br />
            <ul class="flex flex-row space-x-4">
                {#each categories as category}
                    <li>
                        <a
                            role="button"
                            class="btn btn-primary"
                            href="/blog/categories/{category}"
                        >
                            {category}
                        </a>
                    </li>
                {/each}
            </ul>
        </aside>
    {/if}
    <br />

    <a href="/blog" class="btn btn-lg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ai ai-ArrowLeft"
            ><path d="M11 5l-7 7 7 7" /><path d="M4 12h16" /></svg
        >
        View all blog posts
    </a>
</div>

<style>
    .container {
        max-width: 850px;
        line-height: 2em;
        font-size: 1.2em;
       
    }
    h1 {
        font-size: 1.8em;
    }

</style>
