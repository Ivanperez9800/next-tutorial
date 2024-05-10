import PostCards from "@/components/ui/postCards"

async function loadPosts(){
   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
   const data = await res.json()
   return data 
}


async function Posts() {

    const posts = await loadPosts()

    return (
    <>
        {
            posts.map(post => (
                <PostCards post={post}  key={post.id} />
        ))
        }
    </>
  )
}



export default Posts