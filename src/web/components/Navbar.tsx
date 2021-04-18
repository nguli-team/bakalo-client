import { NavLink } from 'react-router-dom';
import { boardlist } from '../utils';

export default function Navbar(): JSX.Element {
  const boards = boardlist.map((b) => b.shorthand);
  return (
    <nav className="navbar">
      <div>
        {boards.map((board, index) => {
          return (
            <NavLink key={index} className="mx-2" activeClassName="text-cyan" to={`/${board}/`}>
              {board}
            </NavLink>
          );
        })}
      </div>
      <div>
        <button>Bookmark</button>
      </div>
    </nav>
  );
}
