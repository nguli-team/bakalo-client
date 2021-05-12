import React from 'react';
import { Post } from '../../domain/model';

const PostCard: React.FC<Post> = (props) => {
  const { id, mediaUrl, posterName, createdAt, desc } = props;

  return (
    <div className="rounded-md shadow-md bg-purple-dark p-3 text-white">
      <div className="grid lg:grid-cols-4">
        <div className="flex lg:flex-col sm:flex-row justify-items-center items-center lg:px-7 sm:py-3">
          <img src={mediaUrl} alt={mediaUrl} />
          <p className="lg:mt-1 text-center text-sm tracking-tighter">
            image.jpg (200 KB, 280x280)
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm tracking-tighter">
            <span className="font-semibold text-cyan">{posterName || 'Anonymous'}</span>
            {` No.${id} ${createdAt}`}
          </p>
          <p className="my-5">{desc}</p>
          <p className="text-sm tracking-tighter">replies</p>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
