import { Suspense } from 'react'
import Posts from '../page';

 

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data
}


async function PostId({ params }) {

  const post = await loadPost(params.postId);

  return (
    <>
    <h1>{post.id} {post.title} </h1>
    <p>{post.body}</p>

    <hr />

    <h2>Otras Publicaciones</h2>

    <Suspense fallback={<div>Loading Posts...</div>} >
          <Posts/>
    </Suspense>

    </>
  )
}

export default PostId