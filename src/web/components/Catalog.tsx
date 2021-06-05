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
      isYou={thread.isYou}
    />
  ));
  return (
    <div className="container min-h-full p-3 grid lg:grid-cols-4 grid-cols-1 lg:gap-5 sm:gap-3">
      {threads.length > 0 ? (
        threadsMarkup
      ) : (
        <div className="col-span-4 place-self-center">
          <p className="text-2xl text-white text-center">Belum ada thread</p>
        </div>
      )}
    </div>
  );
};
export default Catalog;
