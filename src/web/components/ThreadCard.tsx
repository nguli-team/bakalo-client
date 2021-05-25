import React from 'react';
import { Link } from 'react-router-dom';
import { Thread } from '../../domain/model';

const ThreadCard: React.FC<Thread> = (props) => {
  const { id, title, op, replyCount, mediaCount } = props;
  return (
    <div className="rounded shadow-md bg-purple-light text-white m-1 p-3">
      <Link
        to={`./${id}`}
        className="grid lg:grid-flow-row lg:grid-cols-1 grid-flow-col grid-cols-4 lg:gap-1 gap-2"
      >
        <div>{op.mediaUrl && <img src={op.mediaUrl} alt={title} />}</div>
        <div className="col-span-3 lg:text-center text-left">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm tracking-tighter">{`${replyCount} replies ${mediaCount} media`}</p>
          <p>{op.text}</p>
        </div>
      </Link>
    </div>
  );
};
export default ThreadCard;
