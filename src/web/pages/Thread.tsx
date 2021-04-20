import { useParams } from 'react-router';
import { boardlist } from '../utils';
import { ThreadPosts } from '../components';
import { Link } from 'react-router-dom';

export default function Thread(): JSX.Element {
  const path = useParams<{ board: string }>();

  const boardInfo = boardlist.filter((board) => {
    return board.shorthand === path.board;
  })[0];

  console.log(boardInfo);

  return (
    <div className="my-7 grid justify-items-center align-start">
      <Link to={`/${path.board}/`} className="p-4 text-center text-3xl text-yellow font-bold">
        {`/${boardInfo.shorthand}/ - ${boardInfo.name}`}
      </Link>
      <button className="m-5 py-3 px-7 bg-red text-white rounded-md text-2xl">Post a Reply</button>
      <ThreadPosts />
    </div>
  );
}
