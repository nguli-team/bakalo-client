import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getBoards, getPopularThreads } from '../redux/BoardAction';
import { BoardsSection, PopularThread } from '../components';
import di from '../di';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchPageData = useCallback(async () => {
    dispatch(getBoards(await di.services.boardService.getBoards()));
    dispatch(getPopularThreads(await di.services.threadService.getPopularThread()));
  }, [dispatch]);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]);

  const boardList = useSelector((state: RootState) => state.BoardReducer.boardList);
  const popularThreads = useSelector((state: RootState) => state.BoardReducer.popularThreads);

  return (
    <div>
      <BoardsSection boardList={boardList} />
      {popularThreads && <PopularThread popularThreads={popularThreads} />}
    </div>
  );
};
export default Home;
