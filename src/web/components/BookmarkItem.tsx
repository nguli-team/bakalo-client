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
      di.services.bookmarkService.removeBookmark(thread.opId);
    } else {
      setBookmark(true);
      di.services.bookmarkService.createBookmark(thread.opId);
    }
  };

  return (
    <Link to={`/${boardShorthand}/${thread.opId}`}>
      <div className="flex flex-row p-3 justify-between	" key={`${thread.opId}`}>
        <img className="rounded-full w-5 h-5" src={thread.op.mediaUrl} alt="OP" />
        <p className="text-sm mx-1">{thread.title}</p>
        <button type="button" onClick={() => toggleBookmark()}>
          {bookmark ? (
            <BookmarkIcon className="h-4 w-5" />
          ) : (
            <BookmarkIconOutline className="h-4 w-5" />
          )}
        </button>
      </div>
    </Link>
  );
};

export default BookmarkItem;
