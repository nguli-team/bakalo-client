import React from 'react';
import { Link } from 'react-router-dom';
import boardlist from '../../utils/boardlist';

export default function BoardsSection(): JSX.Element {
  const boardsMarkup = boardlist.map((board) => (
    <Link className="p-2 text-center" key={board.shorthand} to={`/${board.shorthand}`}>
      {board.name}
    </Link>
  ));

  return (
    <div className="grid justify-items-center items-center py-5 boards-container min-h-screen">
      <img className="w-50 h-50" src={`${process.env.PUBLIC_URL}/assets/catgirl.png`} alt="logo" />
      <div className="flex flex-col justify-center p-5 lg:w-1/2 sm:w-full">
        <h1 className="text-center text-4xl text-yellow font-bold my-4">Boards</h1>
        <div className="bg-black bg-opacity-70 rounded p-7">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center items-center grid-flow-row text-white">
            {boardsMarkup}
          </div>
        </div>
      </div>
    </div>
  );
}
