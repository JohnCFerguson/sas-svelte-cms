import {getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Gets a specific author from its slug.current value
export async function get({params: {slug}}) {
  const teammate =
    await client.fetch(/* groq */ `*[_type == "teammate" && slug.current == "${slug}"][0]{
    ...,
		"posts": ${getPostsQuery(`
			// Get every post that includes the current document _id in its teammates[]
			^._id in teammates[].teammate._ref
		`)}
  }`)

  if (teammate) {
    return {
      status: 200,
      body: {
        teammate
      }
    }
  }

  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
