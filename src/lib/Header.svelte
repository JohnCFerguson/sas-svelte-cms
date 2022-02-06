<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  import {onMount} from 'svelte'
  import Image from 'svelte-image'
  import Instagram from 'svelte-material-icons/Instagram.svelte'

  let path
  $: ({path} = $page)
  // Show mobile icon and display menu
  let showMobileMenu = false

  // List of navigation items
  const navItems = [
    {label: 'Book Now', href: '/book'},
    {label: 'The Team', href: '/team'},
    {label: 'The Salon', href: '/salon'},
    {label: 'Insta', href: 'https://www.instagram.com/sandandsagebrush/'}
  ]

  // Mobile menu click event handler
  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu)

  // Media match query handler
  const mediaQueryHandler = (e) => {
    // Reset mobile state
    if (!e.matches) {
      showMobileMenu = false
    }
  }

  // Attach media query listener on mount hook
  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 767px)')

    mediaListener.addEventListener('Screen Watch', mediaQueryHandler)
  })
</script>

<header>
  <nav class="grid-container">
    <div class="grid-child logo">
      <Image
        class="logo"
        src="/logos/S+S-Logo-0221_Full Color Logo Horizontal .png"
        alt="Sand and Sagebrush Logo"
        sizes=[300,500]
        breakpoints=[767]
      />
    </div>
    <div class="inner grid-child">
      <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
        <div class="middle-line" />
      </div>
      <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
        {#each navItems as item}
          {#if item.label == 'Insta'}
            <li>
              <a href={item.href}>
                <Instagram color="#8a807b" size="2em" />
              </a>
            </li>
          {:else}
            <li>
              <a href={item.href}>{item.label}</a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </nav>
</header>

<style>
  @font-face {
    font-family: 'StayClassyDuoSerif';
    src: url('./../fonts/StayClassyDuoSerif.otf') format('otf');
  }
  .logo {
    height: 75px;
    max-width: 300px;
  }
  nav {
    height: 75px;
    background-color: #f1dcd4;
  }
  .grand-child {
    height: 75px
  }
  a {
    font-family: 'StayClassyDuoSerif';
  }
  .inner {
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    height: 100%;
  }
  .mobile-icon {
    width: 25px;
    height: 14px;
    position: absolute;
    cursor: pointer;
    right: 0px;
    margin-right: 20px;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: block;
    height: calc(100% - 75px);
    bottom: 0;
    left: 0;
    z-index: 999999;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #424245;
  }

  .navbar-list a {
    color: #8a807b;
    text-decoration: none;
    display: block;
    height: 45px;
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
  }

  @media only screen and (min-width: 767px) {
    nav {
      height: 125px;
    }
    .mobile-icon {
      display: none;
    }
    .navbar-list {
      display: flex;
      padding: 0;
    }
    .navbar-list a {
      display: inline-flex;
      margin-top: 0;
    }
    .navbar-list li {
      position: inherit;
    }
    .logo {
      max-width: 500px;
      /* position: fixed;
      left: 0;
      top: 0; */
    }
  }
</style>
