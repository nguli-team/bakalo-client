import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { clearThreadList, setActiveBoard } from '../redux/BoardAction';
import { Catalog, CreateThreadModal, Navbar } from '../components';
import { getBoards } from '../redux/BoardMiddleware';
import { getThreads } from '../redux/ThreadMiddleware';
import { Board } from '../../domain/model';
import { removeActiveThread } from '../redux/ThreadAction';
import BoardHeader from '../components/BoardHeader';

const BoardPage: React.FC = () => {
  const { boardShorthand } = useParams<{ boardShorthand: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const boardLoading = useSelector((state: RootState) => state.BoardReducer.loading);
  const boards = useSelector((state: RootState) => state.BoardReducer.boardList);
  const activeBoard = boards.find((board) => board.shorthand === boardShorthand) as Board;

  const fetchPageData = useCallback(async () => {
    if (boards.length === 0) {
      dispatch(getBoards());
    }
    dispatch(setActiveBoard({ boardShorthand }));
    dispatch(clearThreadList());
    dispatch(removeActiveThread());
    if (activeBoard) {
      dispatch(getThreads(activeBoard.id));
    }
  }, [activeBoard, boardShorthand, boards.length, dispatch]);

  useEffect(() => {
    fetchPageData().catch(console.error);
  }, [fetchPageData]);

  const threads = useSelector((state: RootState) => state.BoardReducer.threadList);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <div className="flex-grow">
      <Navbar />
      {boardLoading && <div className="mt-64 text-center text-white text-3xl">Loading...</div>}
      {!boardLoading && (
        <div className="my-4 grid justify-items-center align-bottom">
          <BoardHeader toggleModal={toggleModal} />
          <Catalog threads={threads} />
          <CreateThreadModal isOpen={isOpen} closeModal={toggleModal} />
        </div>
      )}
    </div>
  );
};
export default BoardPage;
