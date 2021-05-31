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
    dispatch(getThreads(activeBoard.id));
  }, [activeBoard, boardShorthand, boards.length, dispatch]);

  useEffect(() => {
    // TODO: give feedback to UI
    // eslint-disable-next-line no-console
    fetchPageData().catch(console.error);
  }, [fetchPageData]);

  const threads = useSelector((state: RootState) => state.BoardReducer.threadList);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <Navbar />
      {boardLoading && <div>Loading</div>}
      <div className="my-4 grid justify-items-center align-bottom">
        <BoardHeader toggleModal={toggleModal} />
        {threads.length > 0 && <Catalog threads={threads} />}
        {threads.length === 0 && (
          <div className="m-auto ">
            <p className="text-2xl text-white text-center">There are no thread at this moment</p>
          </div>
        )}
        <CreateThreadModal isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
      </div>
    </div>
  );
};
export default BoardPage;
