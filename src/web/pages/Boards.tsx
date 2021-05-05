import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../domain/redux/store';
import { getBoards, getThreads, setActiveBoard } from '../../domain/redux/BoardAction';
import { Catalog, Modal } from '../components';

export default function Boards(): JSX.Element {
  const { boardShorthand } = useParams<{ boardShorthand: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const boards = useSelector((state: RootState) => state.BoardReducer.boardList).length;

  useEffect(() => {
    if (boards > 0) {
      dispatch(setActiveBoard({ boardShorthand }));
    } else {
      dispatch(getBoards());
      dispatch(setActiveBoard({ boardShorthand }));
    }
    dispatch(getThreads({ boardId: 123142 }));
  }, [boards, dispatch, boardShorthand]);

  const boardInfo = useSelector((state: RootState) => state.BoardReducer.activeBoard);
  const threads = useSelector((state: RootState) => state.BoardReducer.threadList);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
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
  );
}
