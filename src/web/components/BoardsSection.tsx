import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Board } from '../../domain/model';

interface Props {
  boardList: Board[];
}

const BoardsSection: React.FC<Props> = (props) => {
  const { boardList } = props;

  const boardsMarkup = boardList.map((board) => (
    <Link
      className="p-2 text-center lg:text-base text-xs hover:text-cyan"
      key={board.shorthand}
      to={`/${board.shorthand}/`}
    >
      {board.name}
    </Link>
  ));

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  return (
    <div className="grid justify-items-center lg:content-around content-center py-5 boards-container min-h-screen">
      {isDesktop && (
        <img
          className="w-64 h-64"
          src={`${process.env.PUBLIC_URL}/assets/catgirl.png`}
          alt="logo"
        />
      )}
      {isMobile && (
        <img
          className="w-36 h-36"
          src={`${process.env.PUBLIC_URL}/assets/catgirl.png`}
          alt="logo"
        />
      )}
      <div className="flex flex-col justify-center p-5 lg:w-1/2 sm:w-full">
        <h1 className="text-center text-4xl text-yellow font-bold my-4">Boards</h1>
        <div className="bg-black bg-opacity-70 rounded p-7">
          <div className="grid lg:grid-cols-3 grid-cols-2 justify-items-center items-center grid-flow-row text-white">
            {boardsMarkup}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardsSection;
