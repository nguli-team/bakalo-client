import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookmarkItem from './BookmarkItem';
import { AppDispatch, RootState } from '../redux/store';
import getBookmarks from '../redux/BookmarkMiddleware';

const Sidebar: React.FC<{ toggleSidebar: () => void }> = (props) => {
  const { toggleSidebar } = props;

  const dispatch = useDispatch<AppDispatch>();

  const fetchBookmarks = useCallback(async () => {
    dispatch(getBookmarks());
  }, [dispatch]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const threads = useSelector((state: RootState) => state.BookmarkReducer.bookmarks);
  const boards = useSelector((state: RootState) => state.BoardReducer.boardList);
  const findBoard = (boardId: number) => boards.find((board) => board.id === boardId)?.shorthand;

  const bookMarkedItem = threads?.map(
    (thread): JSX.Element => {
      const boardShorthand = findBoard(thread.boardId);

      return <BookmarkItem thread={thread} boardShorthand={boardShorthand} />;
    }
  );

  return (
    <div className="grid grid-cols-4 bg-black bg-opacity-75 w-full min-h-screen left-0 top-0 absolute">
      <div className="col-span-3 sm:col-span-2 lg:col-span-1 bg-purple-dark text-white">
        <div>
          <p className="shadow-xl bg-purple-darkLight p-2">Bookmarked Threads</p>
          {bookMarkedItem}
        </div>
      </div>

      <button
        className="col-span-1 sm:col-span-2 lg:col-span-3"
        type="button"
        onClick={toggleSidebar}
      >
        {' '}
      </button>
    </div>
  );
};

export default Sidebar;
