import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { MenuIcon, ChevronDownIcon, BookmarkIcon } from '@heroicons/react/solid';
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/outline';
import Sidebar from './Sidebar';
import { RootState } from '../redux/store';
import di from '../di';

const Navbar: React.FC = () => {
  const activeBoards = useSelector((state: RootState) => state.BoardReducer.activeBoard);
  const { threadId } = useParams<{ threadId: string }>();
  const activeThread = useSelector((state: RootState) => state.ThreadReducer.activeThread);

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  const boardList = useSelector((state: RootState) => state.BoardReducer.boardList);

  const [dropDown, setDropDown] = useState(false);
  const showDropDown = () => setDropDown(!dropDown);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const bookmarkStatus = di.services.bookmarkService.checkBookmarks(activeThread?.opId as number);
  const [bookmark, setBookmark] = useState(bookmarkStatus);

  const toggleBookmark = () => {
    if (bookmark) {
      setBookmark(false);
      di.services.bookmarkService.removeBookmark(activeThread?.opId as number);
    } else {
      setBookmark(true);
      di.services.bookmarkService.createBookmark(activeThread?.opId as number);
    }
  };

  return (
    <nav className="navbar w-full">
      <div className="flex flex-row justify-start w-full">
        <button type="button" onClick={showSidebar} className="col-span-1">
          <MenuIcon className="h-5 sm:w-10 mt-1" />{' '}
        </button>
        {sidebar && <Sidebar toggleSidebar={() => showSidebar()} />}
        <div className="flex-grow">
          {isDesktop && (
            <div>
              {boardList.map((board) => {
                return (
                  <NavLink
                    key={board.id}
                    className="mx-0.5 sm:mx-2"
                    activeClassName="text-cyan"
                    to={`/${board.shorthand}/`}
                  >
                    {board.shorthand}
                  </NavLink>
                );
              })}
            </div>
          )}
          {isMobile && (
            <div className="dropdown inline-block p-2 w-full">
              <button
                type="button"
                className="text-white font-semibold px-2 rounded inline-flex items-center w-full justify-between"
                onClick={showDropDown}
              >
                <span>
                  /{activeBoards?.shorthand}/ - {activeBoards?.title}
                </span>
                <ChevronDownIcon className="h-5 sm:w-10 mt-1" />
              </button>
              {dropDown && (
                <ul className="dropdown-menu p-3 absolute block bg-purple-darkLight w-3/4 shadow-2xl">
                  {boardList.map((board) => {
                    return (
                      <li>
                        <NavLink
                          key={board.shorthand}
                          className="bg-purple-darkLight text-white"
                          activeClassName="text-cyan"
                          to={`/${board.shorthand}/`}
                        >
                          /{board.shorthand}/ - {board.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </div>
        {threadId && (
          <button type="button" onClick={() => toggleBookmark()}>
            {bookmark ? (
              <BookmarkIcon className="h-4 w-5" />
            ) : (
              <BookmarkIconOutline className="h-4 w-5" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
