import { FC } from 'react';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  body: string;
  post_id: number;

}

const PostCard: FC<PostCardProps> = ({
  post_id, title, body
}) => {
  return (
    <div className="border-b-2">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{body}</p>
      <div className="text-right text-sm">
        <Link href={`comments?postId=${post_id}`}>View Comments</Link>
      </div >
    </div >
  );
};

export default PostCard;
