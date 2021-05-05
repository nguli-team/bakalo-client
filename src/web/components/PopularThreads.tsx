import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { PopularThread } from '../../domain/model';

export default function PopularThreads(props: { popularThreads: PopularThread[] }): JSX.Element {
  const { popularThreads } = props;

  const threadMarkup = popularThreads.map((thread: PopularThread) => (
    <div key={thread.opId} className="m-3">
      <CardItem
        src={thread.op?.mediaUrl}
        thread={thread.title}
        text={thread.op?.desc}
        label={thread.board.title}
        path={`/${thread.board.shorthand}/${thread.opId}`}
      />
    </div>
  ));

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center text-4xl text-yellow font-bold my-4">Popular Threads</h1>
      <div className="py-7 grid lg:grid-cols-4 sm:grid-cols-2">{threadMarkup}</div>
    </div>
  );
}
