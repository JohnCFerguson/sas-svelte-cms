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
  :global(a, h1) {
    border-bottom: none;
    font-family: 'StayClassyDuoSerif';
  }
  :global(a:hover) {
    border-bottom: none;
  }
  :global(body) {
    background-color: #fff;
    color: rgb(138, 128, 123);
    margin: 0;
  }
  @font-face {
    font-family: 'StayClassyDuoSerif';
    src: url('./../fonts/StayClassyDuoSerif.otf') format('otf');
  }
  :global(a) {
    font-family: 'StayClassyDuoSerif';
  }
</style>
