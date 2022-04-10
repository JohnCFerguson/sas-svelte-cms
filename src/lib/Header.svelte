<script context="module">
  import {page} from '$app/stores'
</script>

<script>
  import {onMount} from 'svelte'
  import Instagram from 'svelte-material-icons/Instagram.svelte'

  let path = $page.url?.pathname
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
  const handleMobileIconClick = () => {
    showMobileMenu = !showMobileMenu
  }
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
      <a href="/">
        <img
          class="logo"
          src="/logos/S+S-Logo-0221_Full Color Logo Horizontal .png"
          alt="Sand and Sagebrush Logo"
        />
      </a>
    </div>
    <div class="inner grid-child">
      <div on:click={handleMobileIconClick} class={`mobile-icon ${showMobileMenu ? 'active' : ''}`}>
        <div class="middle-line" />
      </div>
      <ul class={`navbar-list expanded`}>
        {#each navItems as item}
          {#if item.label == 'Insta'}
            <li>
              <a on:click={handleMobileIconClick} href={item.href}>
                <Instagram color="#8a807b" size="2em" />
              </a>
            </li>
          {:else}
            <li>
              <a aria-current={path === item.href} on:click={handleMobileIconClick} href={item.href}
                >{item.label}</a
              >
            </li>
          {/if}
        {/each}
      </ul>
      <ul class={`navbar-list ${showMobileMenu ? 'mobile-show' : 'mobile-hide'}`}>
        {#each navItems as item}
          {#if item.label == 'Insta'}
            <li>
              <a on:click={handleMobileIconClick} href={item.href}>
                <Instagram color="#8a807b" size="2em" />
              </a>
            </li>
          {:else}
            <li>
              <a aria-current={path === item.href} on:click={handleMobileIconClick} href={item.href}
                >{item.label}</a
              >
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
    max-width: 350px;
    z-index: 0;
  }
  nav {
    height: 5em;
    background-color: #f1dcd4;
    box-shadow: 1px 2px 5px #000;
  }
  .grand-child {
    height: 5em;
  }
  a {
    font-family: 'StayClassyDuoSerif';
  }
  .wrapper,
  .placeholder {
    height: 5em;
  }
  .inner {
    max-width: 980px;
    padding-bottom: 2em;
    padding-left: 0.5em;
    padding-right: 2em;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    height: 100%;
  }
  .mobile-icon {
    width: 2em;
    height: 1em;
    position: absolute;
    cursor: pointer;
    right: 0px;
    margin-right: 0.5em;
    margin-top: 2em;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: '';
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
  }

  .navbar-list.mobile-show {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: block;
    height: calc(100% - 75px);
    bottom: 0;
    left: 0;
    z-index: 999999;
    padding-inline-start: 0;
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
    height: 4em;
    align-items: center;
    margin-top: 1em;
    font-size: 20px;
    text-align: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    z-index: -1;
  }
  @media only screen and (max-width: 769px) {
    .navbar-list.expanded {
      display: none;
    }
  }
  @media only screen and (min-width: 769px) {
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
      margin-right: .5em;
    }
    .navbar-list.mobile-show,
    .navbar-list.mobile-hide {
      display: none;
    }
    .logo {
      max-width: 600px;
      /* position: fixed;
      left: 0;
      top: 0; */
    }
  }
</style>
