<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header />

<main style="padding: 1em">
  <slot />
</main>

<Footer />

<style>
  :global(a) {
    border-bottom: none;
  }
  :global(a:hover) {
    border-bottom: none;
  }
  :global(body) {
    background-color: #fff;
    color: #8a807b;
    margin: 0;
  }
  @font-face {
    font-family: 'StayClassyDuoSerif';
    src: url('./../fonts/StayClassyDuoSerif.otf') format('otf');
  }
  * {
    font-family: 'StayClassyDuoSerif';
  }
</style>
