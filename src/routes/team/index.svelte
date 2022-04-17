<script context="module">
  export const load = async ({url, fetch}) => {
    try {
      const url = `/team/team.json`
      const res = await fetch(url)
      const data = await res.json()

      if (data) {
        return {
          props: {
            teammates: data.teammates
          }
        }
      }
    } catch (err) {
      return {
        status: 500,
        error: new Error(`Could not load url`)
      }
    }
  }
</script>

<script>
  export let teammates
  export let width
  import SanityImage from '$lib/SanityImage.svelte'
  import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Button,
    Icon,
    Divider,
    MaterialApp
  } from 'svelte-materialify'
  import {slide} from 'svelte/transition'
  import {mdiChevronDown} from '@mdi/js'

  let active = false
  function toggle(name) {
    console.log('toggle active: ', active)
    console.log('toggle name: ', name)
    if (name === active) active = false
    else active = name

    console.log(active)
  }

  function getMaxWidth(w) {
    if (w > 350 && w != undefined) {
      return Math.floor(w / 3)
    } else if (w != undefined) return Math.floor(w)
  }
</script>

<div class="team">
  <h1>Meet the Team</h1>
  <hr />
  <MaterialApp>
    {#each teammates as teammate}
      {#if teammate.name === 'Maddie Farnell'}
        <div class="d-flex justify-center mt-4 mb-4" bind:clientWidth={width}>
          {#if width != undefined}
            <Card style="min-width:250px;">
              <SanityImage image={teammate.image} maxWidth={getMaxWidth(width)} />
              <CardTitle>{teammate.name}</CardTitle>
              <CardSubtitle>{teammate.jobtitle}</CardSubtitle>
              <CardActions>
                <Button text>Bio</Button>
                <Button text fab size="small" class="ml-auto" on:click={toggle(teammate.name)}>
                  <Icon path={mdiChevronDown} rotate={active ? 180 : 0} />
                </Button>
              </CardActions>
              {#if active === teammate.name}
                <div transition:slide>
                  <Divider />
                  <div class="pl-4 pr-4 pt-2 pb-2">
                    {teammate.bio[0].children[0].text}
                  </div>
                </div>
              {/if}
            </Card>
          {/if}
        </div>
      {/if}
    {/each}
    {#each teammates as teammate}
      {#if teammate.name !== 'Maddie Farnell'}
        <div class="d-flex justify-center mt-4 mb-4" bind:clientWidth={width}>
          {#if width != undefined}
            <Card style="min-width:250px;">
              <SanityImage image={teammate.image} maxWidth={getMaxWidth(width)} />
              <CardTitle>{teammate.name}</CardTitle>
              <CardSubtitle>{teammate.jobtitle}</CardSubtitle>
              <CardActions>
                <Button text>Bio</Button>
                <Button text fab size="small" class="ml-auto" on:click={toggle(teammate.name)}>
                  <Icon path={mdiChevronDown} rotate={active ? 180 : 0} />
                </Button>
              </CardActions>
              {#if active === teammate.name}
                <div transition:slide>
                  <Divider />
                  <div class="pl-4 pr-4 pt-2 pb-2">
                    {teammate.bio[0].children[0].text}
                  </div>
                </div>
              {/if}
            </Card>
          {/if}
        </div>
      {/if}
    {/each}
  </MaterialApp>
</div>

<style>
  h1 {
    font-family: 'StayClassyDuoSerif';
    font-size: 3em;
  }
  .team {
    text-align: center;
    border-radius: 1em;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1);
    margin-top: 4em;
    padding: 1em;
  }
</style>
