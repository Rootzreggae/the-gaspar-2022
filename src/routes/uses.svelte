<script context="module">
  export const load = async () => {
    const Content = usesFile.default;

    return {
      props: {
        Content,
      },
    };
  };
</script>

<script>
  export let Content;
</script>

<Content />
