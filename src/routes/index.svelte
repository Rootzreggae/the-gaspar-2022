<script>
    import Description from "$lib/components/description.svelte";
    import Projects from "$lib/components/projects.svelte";

</script>
<svelte:head>
	<title>Nilson Gaspar - Portfolio - Personal</title>
</svelte:head>

      
<div class="md:container md:mx-auto">
    <Description/>
    <Projects/>
    <slot />
  </div>
