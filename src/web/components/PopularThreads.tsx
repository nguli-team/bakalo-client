import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

enum BoardShorthands {
  TEKNOLOGI = 'teh',
  MUSIK = 'mu'
}

enum BoardNames {
  TEKNOLOGI = 'Teknologi',
  MUSIK = 'Musik'
}

interface Thread {
  opId: string;
  title: string;
  board: BoardShorthands;
  boardName: BoardNames;
  opImgUrl: string;
  desc: string;
}

const mockThread: Thread = {
  opId: '1',
  board: BoardShorthands.TEKNOLOGI,
  boardName: BoardNames.TEKNOLOGI,
  title: 'How exactly C makes you a better programming?',
  opImgUrl:
    'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  desc: "Why use C when there's C++ that can do more?"
};

export default function PopularThreads(): JSX.Element {
  const popularThreads: Thread[] = Array(15).fill(mockThread);

  const threadMarkup = popularThreads.map((thread: Thread, idx: number) => (
    <div key={idx} className="m-3">
      <CardItem
        src={thread.opImgUrl}
        thread={thread.title}
        text={thread.desc}
        label={thread.boardName}
        path={`/${thread.board}/${thread.opId}`}
      />
    </div>
  ));

  return (
    <div className="cards roboto">
      <h1>Popular Threads</h1>
      <div className="py-7 grid grid-cols-4">{threadMarkup}</div>
      <Link to="/">
        <h3>Buy us a coffee and get exclusive rewards</h3>
      </Link>
      <h4>Copyright © 2021 Baka Project All rights reserved.</h4>
    </div>
  );
}
