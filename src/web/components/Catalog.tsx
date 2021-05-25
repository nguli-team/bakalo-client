import React from 'react';
import ThreadCard from './ThreadCard';
import { Thread } from '../../domain/model';

const Catalog: React.FC<{ threads: Thread[] }> = (props) => {
  const { threads } = props;

  const threadsMarkup = threads.map((thread) => (
    <ThreadCard
      key={thread.id}
      id={thread.id}
      title={thread.title}
      boardId={thread.boardId}
      locked={thread.locked}
      sticky={thread.sticky}
      opId={thread.opId}
      op={thread.op}
      posterCount={thread.posterCount}
      replyCount={thread.replyCount}
      mediaCount={thread.mediaCount}
      createdAt={thread.createdAt}
      updatedAt={thread.updatedAt}
    />
  ));
  return (
    <div className="container p-3 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-5 sm:gap-3">
      {threadsMarkup}
    </div>
  );
};
export default Catalog;
