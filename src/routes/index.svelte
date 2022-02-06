<script>
  import Image from 'svelte-image'
</script>

<svelte:head>
  <title>Sand and Sagebrush</title>
</svelte:head>

<Image
  src='/logos/S+S-Logo-0221_Full_Color_Logo_Vertical_Cropped.png'
  alt='Sand and Sagebrush full color logo'
/>

<div class='center'>
  <a role='button' class='book-now-button' href='book'>Book Now</a>
</div>


<style>
  .center {
    text-align: center;
  }
  .book-now-button {
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 7px 21px;
    font-size: 0.9375rem;
    color: rgb(138, 128, 123);
    text-decoration: none;
  }
  a.book-now-button:hover {
    background-color: rgb(245, 243, 243);
  }
</style>