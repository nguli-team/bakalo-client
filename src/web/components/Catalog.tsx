import React from 'react';
import ThreadCard from './ThreadCard';
import { Thread } from '../../domain/model';

const Catalog: React.FC<{ threads: Thread[] }> = (props) => {
  const { threads } = props;

  const threadsMarkup = threads.map((thread) => (
    <ThreadCard
      key={thread.opId}
      opId={thread.opId}
      title={thread.title}
      boardId={thread.boardId}
      posterCount={thread.posterCount}
      replyCount={thread.replyCount}
      mediaCount={thread.mediaCount}
      op={thread.op}
    />
  ));
  return (
    <div className="container p-3 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-5 sm:gap-3">
      {threadsMarkup}
    </div>
  );
};
export default Catalog;
