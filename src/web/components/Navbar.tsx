import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { MenuIcon, BookmarkIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/outline';
import { RootState } from '../redux/store';
import boardlist from '../../utils/boardlist';

interface Thread {
  opId: string;
  title: string;
  opImgUrl: string;
  desc: string;
  replyCount: number;
  mediaCount: number;
}

const mockThread: Thread = {
  opId: '1',
  title: 'How exactly C makes you a better programming?',
  opImgUrl:
    'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  desc: "Why use C when there's C++ that can do more?",
  replyCount: 25,
  mediaCount: 2
};

const Navbar: React.FC = () => {
  const activeBoards = useSelector((state: RootState) => state.BoardReducer.activeBoard);

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  const [dropDown, setDropDown] = useState(false);
  const showDropDown = () => setDropDown(!dropDown);

  const boards = boardlist.map((b) => b.shorthand);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const threads: Thread[] = Array(5).fill(mockThread);

  const [bookmark, setBookmark] = useState(false);
  const toggleBookmark = () => setBookmark(!bookmark);

  const bookMarkedItem = threads.map(
    (thread): JSX.Element => (
      <div className="flex flex-row p-3 justify-between	" key={`${thread.opId}`}>
        <img className="rounded-full w-5 h-5" src={thread.opImgUrl} alt="OP" />
        <p className="text-sm mx-1">{thread.title}</p>
        <button type="button" onClick={() => toggleBookmark()}>
          {bookmark ? (
            <BookmarkIcon className="h-4 w-5" />
          ) : (
            <BookmarkIconOutline className="h-4 w-5" />
          )}
        </button>
      </div>
    )
  );

  return (
    <nav className="navbar w-full">
      <div className="flex flex-row justify-start w-full">
        <button type="button" onClick={showSidebar} className="col-span-1">
          <MenuIcon className="h-5 sm:w-10 mt-1" />{' '}
        </button>
        {sidebar && (
          <div className="grid grid-cols-4 bg-black bg-opacity-75 w-full min-h-screen left-0 top-0 absolute">
            <div className="col-span-3 sm:col-span-2 lg:col-span-1 bg-purple-dark text-white">
              <div>
                <p className="shadow-xl bg-purple-darkLight p-2">Bookmarked Threads</p>
                {bookMarkedItem}
              </div>
              <div>
                <p className="shadow-xl bg-purple-darkLight p-2">History</p>
                {bookMarkedItem}
              </div>
            </div>

            <button
              className="col-span-1 sm:col-span-2 lg:col-span-3"
              type="button"
              onClick={showSidebar}
            >
              {' '}
            </button>
          </div>
        )}
        <div className="flex-grow">
          {isDesktop && (
            <div>
              {boards.map((board) => {
                return (
                  <NavLink
                    key={board}
                    className="mx-0.5 sm:mx-2"
                    activeClassName="text-cyan"
                    to={`/${board}/`}
                  >
                    {board}
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
                  {boardlist.map((board) => {
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
      </div>
    </nav>
  );
};
export default Navbar;
