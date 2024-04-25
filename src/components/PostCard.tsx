import { FC } from 'react';

interface PostCardProps {
  title: string;
  body: string;

}

const PostCard: FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border rounded-md p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
