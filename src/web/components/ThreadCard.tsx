import React from 'react';
import { Link } from 'react-router-dom';
import { Thread, Post } from '../../domain/model';

export default function ThreadCard(props: Thread & { op: Post }): JSX.Element {
  const { opId, title, op, replyCount, mediaCount } = props;
  return (
    <div className="rounded shadow-md bg-purple-light text-white p-3">
      <Link to={`./${opId}`}>
        <div>
          <img src={op.mediaUrl} alt={title} />
        </div>
        <div className="mt-3 text-center">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm tracking-tighter">{`${replyCount} replies ${mediaCount} media`}</p>
          <p>{op.desc}</p>
        </div>
      </Link>
    </div>
  );
}
