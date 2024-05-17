// import React from 'react'

'use client'

import Link from "next/link"

function PostCards({post}) {
  return (
   <div className="bg-gray-950 p-10" >
        <Link href={`/posts/${post.id}`} >

        <h1 className="text-xl font-bold mb-4" >{post.id}-{post.title}</h1>

        </Link>
        <p className="text-slate-300" >{post.body}</p>
        <button onClick={()=> {console.log(post.title)}} >See</button>
   </div>
  )
}

export default PostCards