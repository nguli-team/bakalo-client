import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { MenuIcon, ChevronDownIcon, BookmarkIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/outline';
import Modal from 'react-modal';
import Sidebar from './Sidebar';
import { RootState } from '../redux/store';
import di from '../di';

const Navbar: React.FC = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const activeBoard = useSelector((state: RootState) => state.BoardReducer.activeBoard);
  const activeThread = useSelector((state: RootState) => state.ThreadReducer.activeThread);

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  const boardList = useSelector((state: RootState) => state.BoardReducer.boardList);

  const [dropDown, setDropDown] = useState(false);
  const toggleDropdown = () => setDropDown(!dropDown);

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setDropDown(false);
  };

  const [bookmark, setBookmark] = useState(activeThread?.isBookmarked);

  useEffect(() => {
    setBookmark(activeThread?.isBookmarked);
  }, [activeThread?.isBookmarked]);

  const toggleBookmark = () => {
    if (bookmark) {
      setBookmark(false);
      di.services.bookmarkService.removeBookmark(activeThread?.id as number);
    } else {
      setBookmark(true);
      di.services.bookmarkService.createBookmark(activeThread?.id as number);
    }
  };

  return (
    <nav className="navbar w-full">
      <div className="flex flex-row justify-start content-between w-full">
        <div className="flex-shrink-0 lg:m-0 m-1">
          {threadId ? (
            <Link to={`/${activeBoard?.shorthand}/`}>
              <ArrowLeftIcon className="h-5 w-5 m-1" />
            </Link>
          ) : (
            <button type="button" onClick={toggleSidebar}>
              <MenuIcon className="h-5 w-5 m-1" />
            </button>
          )}
        </div>
        {sidebar && <Sidebar toggleSidebar={() => toggleSidebar()} />}
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
                className="text-white font-semibold px-2 rounded inline-flex items-center w-full justify-between focus:outline-none"
                onClick={toggleDropdown}
              >
                <span>
                  {activeBoard ? `/${activeBoard?.shorthand}/ - ${activeBoard?.name}` : 'Home'}
                </span>
                <ChevronDownIcon className="h-5 sm:w-10 mt-1" />
              </button>
              <Modal
                isOpen={dropDown}
                onRequestClose={toggleDropdown}
                overlayClassName="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-50 grid"
                className="justify-self-center self-start mt-14"
              >
                <ul className="p-3 block bg-purple-darkLight shadow-2xl">
                  {boardList.map((board) => {
                    return (
                      <li>
                        <NavLink
                          key={board.shorthand}
                          className="bg-purple-darkLight text-white"
                          activeClassName="text-cyan"
                          to={`/${board.shorthand}/`}
                          onClick={toggleDropdown}
                        >
                          /{board.shorthand}/ - {board.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </Modal>
            </div>
          )}
        </div>
        {threadId && (
          <button type="button" onClick={() => toggleBookmark()}>
            {bookmark ? (
              <BookmarkIcon className="h-5 w-5" />
            ) : (
              <BookmarkIconOutline className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
