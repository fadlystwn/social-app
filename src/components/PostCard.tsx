import { FC } from 'react';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  body: string;
  post_id: string;

}

const PostCard: FC<PostCardProps> = ({
  post_id, title, body
}) => {
  return (
    <div className="border-b-2">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{body}</p>
      <div className="text-right text-sm">
        <Link href={`/posts/${post_id}`}>View Details</Link>
      </div >
    </div >
  );
};

export default PostCard;
