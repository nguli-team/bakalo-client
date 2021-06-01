import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Post } from '../../domain/model';

const PostCard: React.FC<Post> = (props) => {
  const { id, refNo, mediaUrl, name, createdAt, text, replies } = props;

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  return (
    <div className="rounded-md shadow-md bg-purple-dark my-1 p-3 text-white">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-1">
        <div className="flex lg:flex-col sm:flex-row justify-items-center items-start lg:px-7 sm:py-3">
          {mediaUrl && <img className="lg:w-full w-1/4" src={mediaUrl} alt={mediaUrl} />}
          {isMobile && (
            <a href={`#${refNo}`} className="text-xs tracking-tighter ml-1">
              <span className="font-semibold text-cyan">{name || 'Anonymous'}</span>
              {` No.${id} ${new Date(createdAt).toLocaleString()}`}
            </a>
          )}
        </div>
        <div className="col-span-3">
          {isDesktop && (
            <a href={`#${refNo}`} className="text-sm tracking-tighter">
              <span className="font-semibold text-cyan">{name || 'Anonymous'}</span>
              {` No.${refNo} ${new Date(createdAt).toLocaleString()}`}
            </a>
          )}
          <p className="my-5 lg:text-base text-sm">{text}</p>
          {replies.length > 0 && (
            <p className="text-sm tracking-tighter">{`${replies?.length} replies`}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PostCard;
