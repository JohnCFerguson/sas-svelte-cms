<script context="module">
  export async function load({fetch}) {
    try {
      const url = `/team/team.json`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)

      if (data?.post) {
        return {
          props: data
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

<h1>The Team!</h1>
