// import React from 'react'

'use client'

import Link from "next/link"


function PostCards({post}) {
  return (
   <div>
        <Link href={`/posts/${post.id}`} >

        <h1>{post.id}-{post.title}</h1>

        </Link>
        <p>{post.body}</p>
        <button onClick={()=> {console.log(post.title)}} >See</button>
   </div>
  )
}

export default PostCards