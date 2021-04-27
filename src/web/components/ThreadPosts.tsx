import React from 'react';
import PostCard from './PostCard';
import { Post } from '../../utils/model';

const mockPost: Post = {
  id: '53241',
  repliedTo: '345123',
  title: 'Work in Progress Thread?',
  mediaUrl: 'https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg',
  createdAt: '22/03/2020 19:53:34',
  desc:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus sit dolor quasi expedita ab molestias. Amet voluptatibus debitis earum tempore atque labore aperiam maxime laborum delectus totam minima fugit magnam doloribus quaerat repudiandae nam, aut numquam eos in dignissimos deleniti, ex tenetur consequatur dicta. Natus eligendi placeat optio iste maiores eius modi nisi magni pariatur illum fugiat perferendis exercitationem voluptatibus, soluta reprehenderit. Vel, expedita architecto eaque numquam dolorum veniam doloribus nulla dolores explicabo sapiente, magni fugiat amet ex eveniet, totam labore dolor laudantium autem placeat eligendi. Cumque ipsa provident nemo! Dicta adipisci molestias, est amet laborum rerum totam nesciunt?',
  replyCount: 2
};

export default function ThreadPosts(): JSX.Element {
  const posts: Post[] = Array(16).fill(mockPost);

  const postsMarkup = posts.map((post) => (
    <PostCard
      key={post.id}
      id={post.id}
      repliedTo={post.repliedTo}
      title={post.title}
      mediaUrl={post.mediaUrl}
      author={post.author}
      createdAt={post.createdAt}
      desc={post.desc}
      replyCount={post.replyCount}
    />
  ));

  return <div className="sm:p-2 container grid gap-5">{postsMarkup}</div>;
}
