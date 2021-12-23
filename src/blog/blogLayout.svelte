<script>
 
   
</script>

<svelte:head>
    <title>Writings</title>
</svelte:head>

<div class="container grid lg:grid-cols-1 xs:grid-cols-1 gap-2 mx-auto px-4">
   

    <slot />
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        height: 80vh;
    }
</style>
