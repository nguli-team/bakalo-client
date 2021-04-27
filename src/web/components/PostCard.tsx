import React from 'react';
import { Post } from '../../utils/model';

export default function PostCard(props: Post): JSX.Element {
  const { id, title, mediaUrl, author, createdAt, desc, replyCount } = props;
  return (
    <div className="rounded-md shadow-md bg-purple-dark p-3 text-white">
      <div className="grid lg:grid-cols-4">
        <div className="flex lg:flex-col sm:flex-row justify-items-center items-start lg:px-7 sm:py-3">
          <img src={mediaUrl} alt={title} />
          <p className="text-sm-tracking-tighter">img info</p>
        </div>
        <div className="col-span-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm tracking-tighter">
            <span className="font-semibold text-cyan">{author}</span>
            {`No.${id} ${createdAt}`}
          </p>
          <p className="my-5">{desc}</p>
          <p className="text-sm tracking-tighter">{`${replyCount} replies`}</p>
        </div>
      </div>
    </div>
  );
}
