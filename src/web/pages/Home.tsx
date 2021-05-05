import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../domain/redux/store';
import { getBoards, getPopularThreads } from '../../domain/redux/BoardAction';
import { BoardsSection, PopularThread } from '../components';

export default function Home(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBoards());
    dispatch(getPopularThreads());
  }, [dispatch]);

  const boardList = useSelector((state: RootState) => state.BoardReducer.boardList);
  const popularThreads = useSelector((state: RootState) => state.BoardReducer.popularThreads);

  return (
    <div>
      <BoardsSection boardList={boardList} />
      {popularThreads && <PopularThread popularThreads={popularThreads} />}
    </div>
  );
}
