"use client"
import { useState } from 'react';
import PostCard from '../../components/PostCard';
import { Post } from '@/types/Post';
import { fetchData } from '@/utils/fetchData';
import { useEffect } from 'react';

const PostList = ({ params }: { params: string }) => {

  const PostsUrl = `https://jsonplaceholder.typicode.com/users/${params}/posts`;
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPost = async () => {
    try {
      const data = await fetchData(PostsUrl)
      setPosts(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">List of Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post_id={post.id} title={post.title} body={post.body} />
        ))}
      </div>

    </div>
  );
}

export default PostList