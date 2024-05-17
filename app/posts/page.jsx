import PostCards from "@/components/ui/postCards"

import "./styles/Post.css"

async function loadPosts(){
   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
   const data = await res.json()
   return data 
}


async function Posts() {

    const posts = await loadPosts()

    return (
    <div className="grid">
        {
            posts.map(post => (
                <PostCards post={post}  key={post.id} />
        ))
        }
    </div>
  )
}



export default Posts