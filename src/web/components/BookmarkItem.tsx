import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkIcon } from '@heroicons/react/solid';
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/outline';
import { Thread } from '../../domain/model';
import di from '../di';

const BookmarkItem: React.FC<{ thread: Thread; boardShorthand?: string }> = (props) => {
  const { thread, boardShorthand } = props;

  const [bookmark, setBookmark] = useState(true);
  const toggleBookmark = () => {
    if (bookmark) {
      setBookmark(false);
      di.services.bookmarkService.removeBookmark(thread.id);
    } else {
      setBookmark(true);
      di.services.bookmarkService.createBookmark(thread.id);
    }
  };

  return (
    <div className="flex flex-row p-3 justify-between" key={`${thread.id}`}>
      <Link
        className="flex flex-row justify-start items-center flex-grow"
        to={`/${boardShorthand}/${thread.id}`}
      >
        {thread.op.mediaUrl && (
          <img className="rounded-full w-5 h-5" src={thread.op.mediaUrl} alt="OP" />
        )}
        <p className="lg:text-sm text-xs mx-1">{thread.title}</p>
      </Link>
      <button type="button" onClick={() => toggleBookmark()}>
        {bookmark ? (
          <BookmarkIcon className="h-4 w-5" />
        ) : (
          <BookmarkIconOutline className="h-4 w-5" />
        )}
      </button>
    </div>
  );
};

export default BookmarkItem;
