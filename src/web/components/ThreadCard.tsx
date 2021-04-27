import React from 'react';
import { Link } from 'react-router-dom';
import { Thread } from '../../utils/model';

export default function ThreadCard(props: Thread): JSX.Element {
  const { opId, title, opImgUrl, desc, replyCount, mediaCount } = props;
  return (
    <div className="rounded shadow-md bg-purple-light text-white p-3">
      <Link to={`./${opId}`}>
        <div>
          <img src={opImgUrl} alt={opImgUrl} />
        </div>
        <div className="mt-3 text-center">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm tracking-tighter">{`${replyCount} replies ${mediaCount} media`}</p>
          <p>{desc}</p>
        </div>
      </Link>
    </div>
  );
}
