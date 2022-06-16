<script context="module">
  export async function load({page, fetch}) {
    try {
      const url = `/team/${page.params.slug}.json`
      const res = await fetch(url)
      const {teammate} = await res.json()

      if (teammate) {
        return {
          props: {
            teammate
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
  import PortableText from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let teammate
</script>

<h1>{teammate.name}</h1>

{#if teammate.image}
  <SanityImage image={teammate.image} maxWidth={700} />
{/if}

{#if teammate?.bio}
  <PortableText
    blocks={teammate.bio}
    serializers={{
      types: {
        code: Code,
        image: ImageBlock,
        authorReference: AuthorBlock
      },
      marks: {
        link: Link
      }
    }}
  />
{/if}
