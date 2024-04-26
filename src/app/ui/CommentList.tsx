"use client"
import { useState } from 'react';
import { Comment } from '@/types/Comment';
import { fetchData } from '@/utils/fetchData';
import { useEffect } from 'react';
import CommentBox from '@/components/CommentBox';

const CommentList = ({ params }: { params: string }) => {

  const commentUrl = `https://jsonplaceholder.typicode.com/posts/${params}/comments`;
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    try {
      const data = await fetchData(commentUrl)
      setComments(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchComments();
  }, [])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 "> Comments</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {comments && comments.map((item: Comment) => (
          <CommentBox comments={[item]} />
        ))}
      </div>

    </div>
  );
}

export default CommentList