import React from 'react';
import PostCard from './PostCard';
import { Post } from '../../domain/model';

const ThreadPosts: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  const postsMarkup = posts.map((post) => (
    <PostCard
      key={post.id}
      id={post.id}
      repliedTo={post.repliedTo}
      mediaUrl={post.mediaUrl}
      posterName={post.posterName}
      createdAt={post.createdAt}
      posterId={post.posterId}
      desc={post.desc}
    />
  ));

  return <div>{postsMarkup}</div>;
};
export default ThreadPosts;
