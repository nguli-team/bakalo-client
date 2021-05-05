import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import boardlist from '../../utils/boardlist';
import { ThreadPosts, Modal } from '../components';

export default function Thread(): JSX.Element {
  const path = useParams<{ board: string }>();

  const boardInfo = boardlist.filter((board) => {
    return board.shorthand === path.board;
  })[0];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div className="my-7 grid justify-items-center align-start">
      <Link to={`/${path.board}/`} className="p-4 text-center text-3xl text-yellow font-bold">
        {`/${boardInfo.shorthand}/ - ${boardInfo.name}`}
      </Link>
      <button
        type="button"
        onClick={toggleModal}
        className="m-5 py-3 px-7 bg-red text-white rounded-md text-2xl"
      >
        Post a Reply
      </button>
      <Modal isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
      <ThreadPosts />
    </div>
  );
}
