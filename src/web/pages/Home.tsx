import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { BoardsSection, Navbar, PopularThread } from '../components';
import { getBoards } from '../redux/BoardMiddleware';
import { getThreads } from '../redux/ThreadMiddleware';
import { removeActiveBoard } from '../redux/BoardAction';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchPageData = useCallback(async () => {
    dispatch(getBoards());
    dispatch(getThreads());
    dispatch(removeActiveBoard());
  }, [dispatch]);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]);

  const boardList = useSelector((state: RootState) => state.BoardReducer.boardList);
  const popularThreads = useSelector((state: RootState) => state.BoardReducer.threadList);

  return (
    <div>
      <Navbar />
      <BoardsSection boardList={boardList} />
      {popularThreads && <PopularThread popularThreads={popularThreads} />}
    </div>
  );
};
export default Home;
