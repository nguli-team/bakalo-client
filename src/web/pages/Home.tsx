import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getBoards, getPopularThreads } from '../redux/BoardAction';
import { BoardsSection, PopularThread } from '../components';

const Home: React.FC = () => {
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
};
export default Home;
