<script>
  import SanityImage from './SanityImage.svelte'

  export let teammate
</script>

{#if teammate?.name}
  <a href="/team/{teammate.slug.current}">
    <span>
      <SanityImage image={teammate.image} maxWidth={40} />
    </span>
    {teammate.name}
  </a>
{/if}

<style>
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    vertical-align: middle;
  }
  span :global(img) {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin: 0;
  }
</style>
