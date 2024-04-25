import { FC } from 'react'
import PostCard from './PostCard';
import { Post } from '@/types/Post';

interface PostCard {
  posts: Post[];
}

const PostList: FC<PostCard> = ({ posts }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">List of Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default PostList