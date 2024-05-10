// import React from 'react'

'use client'

function PostCards({post}) {
  return (
   <div>
        <h3>{post.id}.{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={()=> {console.log(post.title)}} > Click</button>
   </div>
  )
}

export default PostCards