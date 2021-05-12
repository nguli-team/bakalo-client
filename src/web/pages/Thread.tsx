import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { OP, ThreadPosts, Modal } from '../components';
import { getBoards, setActiveBoard } from '../redux/BoardAction';
import { getReplies, getThread } from '../redux/ThreadAction';

const Thread: React.FC = () => {
  const { boardShorthand } = useParams<{ boardShorthand: string }>();
  const dispatch = useDispatch();

  const boards = useSelector((state: RootState) => state.BoardReducer.boardList).length;

  useEffect(() => {
    if (boards > 0) {
      dispatch(setActiveBoard({ boardShorthand }));
    } else {
      dispatch(getBoards());
      dispatch(setActiveBoard({ boardShorthand }));
    }
    dispatch(getThread('opId'));
    dispatch(getReplies('opId'));
  }, [dispatch, boardShorthand, boards]);

  const boardInfo = useSelector((state: RootState) => state.BoardReducer.activeBoard);
  const thread = useSelector((state: RootState) => state.ThreadReducer.activeThread);
  const replies = useSelector((state: RootState) => state.ThreadReducer.replies);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div className="my-7 grid justify-items-center align-start">
      <Link to={`/${boardShorthand}/`} className="p-4 text-center text-3xl text-yellow font-bold">
        {`/${boardInfo?.shorthand}/ - ${boardInfo?.title}`}
      </Link>
      <button
        type="button"
        onClick={toggleModal}
        className="m-5 py-3 px-7 bg-red text-white rounded-md text-2xl"
      >
        Post a Reply
      </button>
      <div className="container sm:p-2 grid gap-5">
        {thread?.op && <OP op={thread.op} title={thread.title} />}
        {replies && <ThreadPosts posts={replies} />}
      </div>
      <Modal isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
    </div>
  );
};
export default Thread;
