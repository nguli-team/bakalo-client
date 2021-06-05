import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { RootState } from '../redux/store';
import ReplyCard from './ReplyCard';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  replies: number[];
}

const CreatePostModal: React.FC<ModalProps> = ({ isOpen, closeModal, replies }) => {
  const replyPosts = useSelector((state: RootState) => state.ThreadReducer.posts).filter((post) =>
    replies.find((replyRef) => replyRef === post.refNo)
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-50 grid"
      className="place-self-center"
    >
      <div className="max-w-md grid justify-items-stretch items-center">
        {replyPosts.map((post) => (
          <ReplyCard
            key={`reply-${post.id}`}
            id={post.id}
            refNo={post.refNo}
            threadId={post.threadId}
            posterId={post.posterId}
            name={post.name}
            text={post.text}
            mediaUrl={post.mediaUrl}
            replies={post.replies}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            isYou={post.isYou}
          />
        ))}
        <button
          type="button"
          className="bg-purple-dark text-white p-2 rounded-md my-1"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CreatePostModal;
