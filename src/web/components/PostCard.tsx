import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TrashIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import reactStringReplace from 'react-string-replace';
import { Post } from '../../domain/model';
import RepliesModal from './RepliesModal';
import CreatePostModal from './CreatePostModal';
import { AppDispatch } from '../redux/store';
import { deletePost, getPosts } from '../redux/PostMiddleware';

const PostCard: React.FC<Post> = (props) => {
  const { id, threadId, refNo, mediaUrl, name, createdAt, text, replies, isYou } = props;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    setIsOpen((modalWasOpen) => !modalWasOpen);
  }

  const [postModalIsOpen, setPostModal] = React.useState(false);

  function togglePostModal() {
    setPostModal((modalWasOpen) => !modalWasOpen);
  }

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  const [deletable, setDeletable] = useState(isYou && (Date.now() - createdAt) / 1000 < 60);
  const [timeLeft, setTimeLeft] = useState(60 - (Date.now() - createdAt) / 1000);
  const tick = () => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    } else {
      setTimeLeft(0);
      setDeletable(false);
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleDeletePost = async (event: any) => {
    event.preventDefault();
    try {
      await dispatch(deletePost(id));
      await dispatch(getPosts(threadId));
      return toast.info('Delete Success!');
    } catch (err) {
      return toast.error('Delete Failed!');
    }
  };

  return (
    <div className="rounded-md shadow-md bg-purple-dark m-1 p-3 text-white" id={`${refNo}`}>
      <div className="flex-shrink flex lg:flex-row flex-col">
        <div className="lg:max-w-xs sm:max-w-full flex lg:flex-col sm:flex-row justify-items-center items-start lg:px-7 sm:py-3">
          {mediaUrl && <img className="lg:w-full w-1/4" src={mediaUrl} alt={mediaUrl} />}
          {isMobile && (
            <a href={`#${refNo}`} className="text-xs tracking-tighter ml-1">
              <span className="font-semibold text-cyan">{isYou ? 'You' : name || 'Anonymous'}</span>
              {` No.${id} ${new Date(createdAt).toLocaleString()}`}
            </a>
          )}
        </div>
        <div className="flex-grow">
          {isDesktop && (
            <div className="flex flex-row justify-between">
              <a href={`#${refNo}`} className="text-sm tracking-tighter">
                <span className="font-semibold text-cyan">
                  {isYou ? 'You' : name || 'Anonymous'}
                </span>
                {` No.${refNo} ${new Date(createdAt).toLocaleString()}`}
              </a>
              {deletable && isYou && (
                <button type="button" onClick={handleDeletePost}>
                  <TrashIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
          <p className="my-5 lg:text-base text-sm whitespace-pre-wrap break-words">
            {reactStringReplace(text, />>(\d+)/gm, (match) => (
              <a key={match} href={`#${match}`} className="text-yellow">
                {`>>${match}`}
              </a>
            ))}
          </p>
          <div className="flex flex-row justify-between">
            {replies.length > 0 && (
              <button
                type="button"
                onClick={toggleModal}
                className="text-sm tracking-tighter"
              >{`${replies?.length} replies`}</button>
            )}
            <button type="button" onClick={togglePostModal} className="text-sm tracking-tighter">
              Reply to this post
            </button>
          </div>
          <RepliesModal isOpen={modalIsOpen} closeModal={toggleModal} replies={replies} />
          <CreatePostModal
            isModalVisible={postModalIsOpen}
            onBackdropClick={togglePostModal}
            refNo={refNo}
          />
        </div>
      </div>
    </div>
  );
};
export default PostCard;
