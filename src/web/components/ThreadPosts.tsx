import React from 'react';
import PostCard from './PostCard';
import { Post } from '../../domain/model';
import OP from './OP';

const ThreadPosts: React.FC<{ title: string; posts: Post[] }> = (props) => {
  const { title, posts } = props;

  const postsMarkup = posts.map((post, index) => {
    if (index === 0) {
      return <OP key={post.id} op={post} title={title} />;
    }
    return (
      <PostCard
        key={post.id}
        id={post.id}
        refNo={post.refNo}
        threadId={post.threadId}
        posterId={post.posterId}
        name={post.name}
        text={post.text}
        mediaUrl={post.mediaUrl}
        replies={post.replies}
        createdAt={post.createdAt}
        updatedAt={post.updatedAt}
        isYou={post.isYou}
      />
    );
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
