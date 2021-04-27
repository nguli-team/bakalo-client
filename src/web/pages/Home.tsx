import React from 'react';
import { BoardsSection, PopularThread } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <BoardsSection />
      <PopularThread />
    </div>
  );
}
