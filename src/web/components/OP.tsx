import React from 'react';
import { Post } from '../../domain/model';

export default function OP(props: { op: Post; title: string }): JSX.Element {
  const { title, op } = props;

  return (
    <div className="rounded-md shadow-md bg-purple-dark p-3 text-white">
      <div className="grid lg:grid-cols-4">
        <div className="flex lg:flex-col sm:flex-row justify-items-center items-center lg:px-7 sm:py-3">
          <img src={op.mediaUrl} alt={op.mediaUrl} />
          <p className="lg:mt-1 text-center text-sm tracking-tighter">
            image.jpg (200 KB, 280x280)
          </p>
        </div>
        <div className="col-span-3">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          <p className="text-sm tracking-tighter">
            <span className="font-semibold text-cyan">{op.posterName || 'Anonymous'}</span>
            {` No.${op.id} ${op.createdAt}`}
          </p>
          <p className="my-5">{op.desc}</p>
          <p className="text-sm tracking-tighter">replies</p>
        </div>
      </div>
    </div>
  );
}
