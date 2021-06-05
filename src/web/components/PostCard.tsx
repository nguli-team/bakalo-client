import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import reactStringReplace from 'react-string-replace';
import { Post } from '../../domain/model';
import RepliesModal from './RepliesModal';
import CreatePostModal from './CreatePostModal';
import { AppDispatch } from '../redux/store';
import { deletePost, getPosts } from '../redux/PostMiddleware';
import MediaContainer from './MediaContainer';

const PostCard: React.FC<Post> = (props) => {
  const {
    id,
    threadId,
    refNo,
    mediaUrl,
    mediaFileName,
    name,
    createdAt,
    text,
    replies,
    isYou
  } = props;

  const [replyModalIsOpen, setReplyIsOpen] = React.useState(false);

  function toggleModal() {
    setReplyIsOpen((modalWasOpen) => !modalWasOpen);
  }

  const [postModalIsOpen, setPostModal] = React.useState(false);

  function togglePostModal() {
    setPostModal((modalWasOpen) => !modalWasOpen);
  }

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
      return toast.info('Pos berhasil dihapus!');
    } catch (err) {
      return toast.error('Pos gagal dihapus!');
    }
  };

  return (
    <div className="rounded-md shadow-md bg-purple-dark m-1 p-3 text-white" id={`${refNo}`}>
      <div className="grid grid-cols-5 gap-2">
        {mediaUrl && (
          <div className="col-span-1">
            <MediaContainer mediaUrl={mediaUrl} mediaFileName={mediaFileName} />
          </div>
        )}
        <div className={`${mediaUrl ? 'col-span-4' : 'col-span-5'} flex flex-col justify-between`}>
          <div className="flex flex-row justify-between">
            <p className="text-sm tracking-tighter">
              <span className="font-semibold text-cyan">{isYou ? 'Anda' : name || 'Anonim'}</span>
              {` No.${refNo} ${new Date(createdAt).toLocaleString()}`}
            </p>
            {deletable && isYou && (
              <button type="button" onClick={handleDeletePost}>
                <TrashIcon className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className="flex-grow my-2 lg:text-base text-sm whitespace-pre-wrap break-words">
            {reactStringReplace(text, />>(\d+)/gm, (match) => (
              <a key={match} href={`#${match}`} className="text-yellow">
                <span>
                  {`>>${match}`}
                  {isYou && ' (Anda)'}
                </span>
              </a>
            ))}
          </p>
          <div className="flex flex-row gap-2 justify-start">
            {replies.length > 0 && (
              <button
                type="button"
                onClick={toggleModal}
                className="text-xs tracking-tighter rounded-sm font-semibold"
              >{`${replies?.length} balasan`}</button>
            )}
            <button
              type="button"
              onClick={togglePostModal}
              className="text-xs tracking-tighter rounded-sm font-semibold bg-red px-1"
            >
              Balas pos ini
            </button>
          </div>
        </div>
      </div>
      <RepliesModal isOpen={replyModalIsOpen} closeModal={toggleModal} replies={replies} />
      <CreatePostModal isOpen={postModalIsOpen} closeModal={togglePostModal} refNo={refNo} />
    </div>
  );
};
export default PostCard;
