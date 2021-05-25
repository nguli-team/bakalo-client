import React from 'react';
import PostCard from './PostCard';
import { Post } from '../../domain/model';

const ThreadPosts: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  const postsMarkup = posts.map((post) => (
    <PostCard
      key={post.id}
      id={post.id}
      refNo={post.refNo}
      threadId={post.threadId}
      posterId={post.posterId}
      name={post.name}
      text={post.text}
      mediaUrl={post.mediaUrl}
      createdAt={post.createdAt}
      updatedAt={post.updatedAt}
    />
  ));

  return <div>{postsMarkup}</div>;
};
export default ThreadPosts;
