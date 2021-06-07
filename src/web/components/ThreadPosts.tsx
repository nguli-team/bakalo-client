import React from 'react';
import PostCard from './PostCard';
import { Post } from '../../domain/model';
import OP from './OP';

const ThreadPosts: React.FC<{ title: string; posts: Post[] }> = ({ title, posts }) => {
  const postsMarkup = posts.map((post, index) => {
    if (index === 0) {
      return <OP key={post.id} op={post} title={title} />;
    }
    return <PostCard key={post.id} post={post} />;
  });

  return (
    <div className="container sm:p-2 grid gap-2">
      {posts.length > 1 ? (
        postsMarkup
      ) : (
        <div className="grid gap-7">
          <OP key={posts[0].id} op={posts[0]} title={title} />
          <p className="text-2xl text-white text-center">Belum ada balasan</p>
        </div>
      )}
    </div>
  );
};
export default ThreadPosts;
