<script>
    import Description from "../components/description.svelte";
    import Projects from "../components/projects.svelte";

</script>
<svelte:head>
	<title>Nilson Gaspar - Portfolio - Personal</title>
</svelte:head>

      
<div class="md:container md:mx-auto">
    <Description/>
    <Projects/>
    <slot />
  </div>
