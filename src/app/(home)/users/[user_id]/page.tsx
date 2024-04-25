"use client"
import { useEffect, useState } from "react";
import PostList from "@/components/PostList";
import { Post } from "@/types/Post";
import { fetchData } from "@/utils/fetchData";

export default function UserDetails({ params }: { params: { user_id: string } }) {
  const url = `https://jsonplaceholder.typicode.com/users/${params.user_id}/posts`
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    try {
      const data = await fetchData(url)
      setPosts(data)

    } catch (err) {
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>User Detail hello</h1>
      <PostList posts={posts} />
    </div>
  )

}