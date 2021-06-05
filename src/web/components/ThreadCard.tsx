import React from 'react';
import { Link } from 'react-router-dom';
import { ChatAlt2Icon, PhotographIcon, UsersIcon } from '@heroicons/react/solid';
import { Thread } from '../../domain/model';
import MediaContainer from './MediaContainer';

const ThreadCard: React.FC<Thread> = (props) => {
  const { id, title, op, replyCount, posterCount, mediaCount } = props;
  return (
    <div className="rounded shadow-md bg-purple-light text-white m-1 p-3">
      <div className="h-full flex lg:flex-col sm:flex-row justify-center items-stretch">
        <div className="lg:w-full w-1/4 mr-2">
          <MediaContainer mediaUrl={op.mediaUrl} mediaFileName={op.mediaFileName} />
        </div>
        <Link to={`./${id}`} className="flex-grow lg:text-center text-left">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm">
            {replyCount > 0 && (
              <span>
                {` ${replyCount} `} <ChatAlt2Icon className="w-4 h-4 inline-block" />
              </span>
            )}
            {posterCount > 0 && (
              <span>
                {` ${posterCount} `} <UsersIcon className="w-4 h-4 inline-block" />
              </span>
            )}
            {mediaCount > 0 && (
              <span>
                {` ${mediaCount} `} <PhotographIcon className="w-4 h-4 inline-block" />
              </span>
            )}
          </p>
          <p className="whitespace-pre-wrap break-words">{op.text}</p>
        </Link>
      </div>
    </div>
  );
};
export default ThreadCard;
