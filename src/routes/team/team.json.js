import {getTeamQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Fetch all valid teammates to display on the Team page
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"teammates": ${getTeamQuery()},
  }`)

  if (data) {
    return {
      status: 200,
      body: data
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
