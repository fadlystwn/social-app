import { FC } from 'react';
import { Comment } from '@/types/Comment';

interface CommentProps {
  comments: Comment[];
}

const CommentBox: FC<CommentProps> = ({ comments }) => {
  return (
    <div className="divide-y divide-gray-300">
      {comments.map((comment: Comment) => (
        <div key={comment.id} className="py-4 border-b-2">
          <div className="flex space-x-2">
            <img src={`https://via.placeholder.com/40`} alt={`${comment.email}`} className="w-8 h-8 rounded-full" />
            <div>
              <p className="font-semibold  text-blue-600">{comment.name}</p>
              <p>{comment.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
