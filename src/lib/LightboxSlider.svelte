<script>
  export let images
  $: activeImage = 0
  let active
  function showImg(e) {
    activeImage = e
    active = 1
  }
  function changeImg(e) {
    let i = images.length
    if (e == 1) {
      if (activeImage == 0) activeImage = i - 1
      else activeImage -= 1
    } else {
      if (i == activeImage + 1) activeImage = 0
      else activeImage += 1
    }
  }
</script>

{#if images}
  {#if active}
    <div id="overlay" class="grid cell">
      <div id="overlayImage" class="rel">
        <img class="bgw" src={images[activeImage].image} alt={images[activeImage].alt} />
        <button class="abs arrow arrowLeft white noBor" on:click={() => changeImg(1)}
          >&lsaquo;</button
        >
        <button class="abs arrow arrowRight white noBor" on:click={() => changeImg(2)}
          >&rsaquo;</button
        >
        <button id="close" class="abs bold bgw noBor" on:click={() => (active = '')}>X</button>
      </div>
    </div>
  {/if}

  <div id="img">
    <div id="mini" class="grid-mini">
      {#each images as item, i}
        <img class="cell" src={item.image} alt={item.alt} on:click={() => showImg(i)} />
      {/each}
    </div>
  </div>
{/if}

<style>
  .grid-mini {
    margin-top: 30px;
    text-align: center;
  }
  .grid-mini img {
    max-width: 300px;
    max-height: 200px;
    margin: 5px;
    box-shadow: 1px 1px 2px #000;
  }
  #overlay {
    display: grid;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1350;
    background-color: rgba(255, 255, 255, 0.8);
  }
  #overlay img {
    max-width: 95%;
    padding: 0.5rem;
  }
  #overlay button {
    z-index: 2000;
    border: none;
  }
  #overlay #close {
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
    border-radius: 10px;
  }
  #overlay .arrow {
    top: 0;
    width: 70px;
    height: 100%;
    font-size: 7rem;
  }
  #overlay .arrowLeft {
    left: 0;
  }
  #overlay .arrowRight {
    right: 0;
  }
  button,
  .rel {
    position: relative;
  }
  .abs {
    position: absolute;
  }
  .bgw {
    background-color: #fff;
  }
  .white {
    color: #000;
  }
  .noBor {
    background-color: transparent;
  }
</style>
