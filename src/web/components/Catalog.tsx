import React from 'react';
import ThreadCard from './ThreadCard';

interface Thread {
  opId: string;
  title: string;
  opImgUrl: string;
  desc: string;
  replyCount: number;
  mediaCount: number;
}
const mockThread: Thread = {
  opId: '1',
  title: 'How exactly C makes you a better programming?',
  opImgUrl:
    'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  desc: "Why use C when there's C++ that can do more?",
  replyCount: 25,
  mediaCount: 2
};

export default function Catalog(): JSX.Element {
  const threads: Thread[] = Array(16).fill(mockThread);

  const threadsMarkup = threads.map((thread) => (
    <ThreadCard
      key={thread.opId}
      opId={thread.opId}
      title={thread.title}
      opImgUrl={thread.opImgUrl}
      desc={thread.desc}
      replyCount={thread.replyCount}
      mediaCount={thread.mediaCount}
    />
  ));
  return (
    <div className="container p-3 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-5 sm:gap-3">
      {threadsMarkup}
    </div>
  );
}
