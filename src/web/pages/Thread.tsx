import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import boardlist from '../../utils/boardlist';
import { ThreadPosts } from '../components';
import Http from '../../adapters/infrastuctures/Htpp';

const http = new Http();

export default function Thread(): JSX.Element {
  const path = useParams<{ board: string }>();

  const sampleRequest = () => {
    (async () => {
      const response = await http.request('get', 'https://jsonplaceholder.typicode.com/posts');
      console.log(response);
    })();
  };

  const boardInfo = boardlist.filter((board) => {
    return board.shorthand === path.board;
  })[0];

  return (
    <div className="my-7 grid justify-items-center align-start">
      <Link to={`/${path.board}/`} className="p-4 text-center text-3xl text-yellow font-bold">
        {`/${boardInfo.shorthand}/ - ${boardInfo.name}`}
      </Link>
      <button
        type="button"
        onClick={() => sampleRequest()}
        className="m-5 py-3 px-7 bg-red text-white rounded-md text-2xl"
      >
        Post a Reply
      </button>
      <ThreadPosts />
    </div>
  );
}
