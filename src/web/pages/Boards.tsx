import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setActiveBoard } from '../redux/BoardAction';
import { Catalog, Modal, Navbar } from '../components';
import { getBoards } from '../redux/BoardMiddleware';
import { getThreads } from '../redux/ThreadMiddleware';

const Boards: React.FC = () => {
  const { boardShorthand } = useParams<{ boardShorthand: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const boards = useSelector((state: RootState) => state.BoardReducer.boardList);
  const activeBoard = useSelector((state: RootState) => state.BoardReducer.activeBoard);

  const fetchPageData = useCallback(async () => {
    if (boards.length > 0) {
      dispatch(setActiveBoard({ boardShorthand }));
    } else {
      dispatch(getBoards());
      dispatch(setActiveBoard({ boardShorthand }));
    }
    dispatch(getThreads(activeBoard?.id));
  }, [activeBoard?.id, boardShorthand, boards.length, dispatch]);

  useEffect(() => {
    // TODO: give feedback to UI
    // eslint-disable-next-line no-console
    fetchPageData().catch(console.error);
  }, [fetchPageData]);

  const boardInfo = useSelector((state: RootState) => state.BoardReducer.activeBoard);
  const threads = useSelector((state: RootState) => state.BoardReducer.threadList);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <Navbar />
      <div className="my-7 grid justify-items-center align-start">
        <h1 className="p-4 text-center text-3xl text-yellow font-bold">
          {`/${boardInfo?.shorthand}/ - ${boardInfo?.title}`}
        </h1>
        <button
          type="button"
          onClick={toggleModal}
          className="m-5 py-3 px-7 bg-red text-white rounded-md text-2xl"
        >
          Start a Thread
        </button>
        {threads && <Catalog threads={threads} />}
        <Modal isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
      </div>
    </div>
  );
};
export default Boards;
