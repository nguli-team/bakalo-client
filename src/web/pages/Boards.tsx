import React from 'react';
import { useParams } from 'react-router-dom';
import { Catalog } from '../components';
import boardlist from '../../utils/boardlist';

export default function Boards(): JSX.Element {
  const path = useParams<{ board: string }>();

  const boardInfo = boardlist.filter((board) => {
    return board.shorthand === path.board;
  })[0];

  return (
    <div className="my-7 grid justify-items-center align-start">
      <h1 className="p-4 text-center text-3xl text-yellow font-bold">
        {`/${boardInfo.shorthand}/ - ${boardInfo.name}`}
      </h1>
      <button type="button" className="m-5 py-3 px-7 bg-red text-white rounded-md text-2xl">
        Start a Thread
      </button>
      <Catalog />
    </div>
  );
}
