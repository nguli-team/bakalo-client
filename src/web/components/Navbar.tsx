import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const boards = ['a', 'gim', 'ipa', 'mu', 'o', 'or', 'pol', 's', 'teh', 'tv'];
  return (
    <div className="w-full sticky top-0 p-1 z-10 bg-purple-dark text-white shadow-md flex flex-row justify-between">
      <div>
        {boards.map((board, index) => {
          return (
            <NavLink key={index} className="px-2" activeClassName="text-cyan" to={`/${board}`}>
              {board}
            </NavLink>
          );
        })}
      </div>
      <div>
        <button>Bookmark</button>
      </div>
    </div>
  );
}
