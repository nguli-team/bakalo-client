import React from 'react';
import reactStringReplace from 'react-string-replace';
import { Post } from '../../domain/model';

const PostCard: React.FC<Post> = (props) => {
  const { refNo, mediaUrl, name, createdAt, text, isYou } = props;

  return (
    <div className="rounded-md shadow-md bg-purple-dark my-1 p-3 text-white">
      <div className="grid grid-cols-5 gap-2">
        {mediaUrl && (
          <div className="col-span-1">
            <a href={mediaUrl} rel="noreferrer" target="_blank">
              <img src={mediaUrl} alt={mediaUrl} />
            </a>
          </div>
        )}
        <div className="col-span-4">
          <div className="flex flex-row justify-between">
            <a href={`#${refNo}`} className="text-sm tracking-tighter">
              <span className="font-semibold text-cyan">{isYou ? 'Anda' : name || 'Anonim'}</span>
              {` No.${refNo} ${new Date(createdAt).toLocaleString()}`}
            </a>
          </div>
          <p className="my-5 lg:text-base text-sm whitespace-pre-wrap break-words">
            {reactStringReplace(text, />>(\d+)/gm, (match) => (
              <a key={match} href={`#${match}`} className="text-yellow">
                {`>>${match}`}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
