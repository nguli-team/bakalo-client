import React from 'react';
import { Link } from 'react-router-dom';
import { ChatAlt2Icon, PhotographIcon, TrashIcon, UsersIcon } from '@heroicons/react/solid';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Thread } from '../../domain/model';
import MediaContainer from './MediaContainer';
import { AppDispatch, RootState } from '../redux/store';
import { deleteThread, getThreads } from '../redux/ThreadMiddleware';

const ThreadCard: React.FC<Thread> = (props) => {
  const { id, title, op, replyCount, posterCount, mediaCount } = props;

  const boardId = useSelector((state: RootState) => state.BoardReducer.activeBoard?.id);
  const isAdmin = useSelector((state: RootState) => state.VipReducer.isAdmin);

  const dispatch = useDispatch<AppDispatch>();

  const handleDeletePost = async (event: any) => {
    event.preventDefault();
    try {
      await dispatch(deleteThread(id));
      await dispatch(getThreads(boardId));
      return toast.info('Thread berhasil dihapus!');
    } catch (err) {
      return toast.error('Thread gagal dihapus!');
    }
  };

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  return (
    <div className="rounded shadow-md bg-purple-light text-white m-1 lg:p-3 p-1.5">
      <Link
        to={`./${id}`}
        className="h-full flex lg:flex-col sm:flex-row justify-start items-stretch"
      >
        <div className="lg:w-full w-1/4 flex-shrink-0 mr-2">
          <MediaContainer mediaUrl={op.mediaUrl} mediaFileName={op.mediaFileName} />
        </div>
        <div className="flex-grow lg:text-center text-left">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm">
            {replyCount > 0 && (
              <span>
                {` ${replyCount} `} <ChatAlt2Icon className="w-4 h-4 inline-block" />
              </span>
            )}
            {posterCount > 0 && (
              <span>
                {` ${posterCount} `} <UsersIcon className="w-4 h-4 inline-block" />
              </span>
            )}
            {mediaCount > 0 && (
              <span>
                {` ${mediaCount} `} <PhotographIcon className="w-4 h-4 inline-block" />
              </span>
            )}
          </p>
          <p className="lg:text-base text-sm whitespace-pre-wrap break-words max-h-96 overflow-hidden">
            {op.text.length > 200 ? `${op.text.substring(0, 200)}...` : op.text}
          </p>
        </div>
        {isAdmin && (
          <button
            className="lg:self-center self-start flex flex-row items-center text-sm tracking-tighter font-semibold"
            type="button"
            onClick={handleDeletePost}
          >
            <TrashIcon className="w-4 h-4" />
            {!isMobile && 'Delete Thread'}
          </button>
        )}
      </Link>
    </div>
  );
};
export default ThreadCard;
