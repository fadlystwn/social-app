"use client"
import { useState } from 'react';
import { Post } from '@/types/Post';
import { fetchData } from '@/utils/fetchData';
import { useEffect } from 'react';
import CommentList from '@/app/ui/CommentList';
const PostDetails = ({ params }: { params: { post_id: string } }) => {

  const PostsUrl = `https://jsonplaceholder.typicode.com/posts/${params.post_id}`;
  const [post, setPost] = useState({} as Post)

  useEffect(() => {

    const fetchComment = async () => {
      try {
        const data = await fetchData(PostsUrl)
        setPost(data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchComment();
  }, [setPost, PostsUrl, params.post_id])

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      <p>{post.body}</p>
      <CommentList params={params.post_id} />
    </div>
  );
}

export default PostDetails