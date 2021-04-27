import React from 'react';
import { NavLink } from 'react-router-dom';
import boardlist from '../../utils/boardlist';

export default function Navbar(): JSX.Element {
  const boards = boardlist.map((b) => b.shorthand);
  return (
    <nav className="navbar">
      <div>
        {boards.map((board) => {
          return (
            <NavLink key={board} className="mx-2" activeClassName="text-cyan" to={`/${board}/`}>
              {board}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
