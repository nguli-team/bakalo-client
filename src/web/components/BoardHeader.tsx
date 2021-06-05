import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ChatAltIcon, PlusIcon } from '@heroicons/react/solid';
import { RootState } from '../redux/store';

const BoardHeader: React.FC<{ toggleModal: () => void }> = (props) => {
  const { toggleModal } = props;
  const { threadId } = useParams<{ threadId: string }>();
  const boardInfo = useSelector((state: RootState) => state.BoardReducer.activeBoard);
  const isVip = useSelector((state: RootState) => state.VipReducer.isVip);

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 	1280px)'
  });

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)'
  });

  return (
    <div>
      {isDesktop && (
        <div className="flex flex-col items-center">
          <h1 className="p-4 text-center text-3xl text-yellow font-bold">
            {`/${boardInfo?.shorthand}/ - ${boardInfo?.name}`}
          </h1>
          <h3 className="p-4 text-center text-md text-white"> {boardInfo?.description}</h3>
          <button
            type="button"
            onClick={toggleModal}
            className="max-w-md m-5 py-3 px-7 bg-red text-white rounded-md text-2xl"
          >
            {threadId ? 'Balas Thread' : 'Mulai Thread Baru'}
          </button>
        </div>
      )}
      {isMobile && (
        <button
          type="button"
          onClick={toggleModal}
          className="fixed rounded-full bg-red text-white right-5 bottom-5 p-3"
        >
          {threadId ? <ChatAltIcon className="h-9 w-9" /> : <PlusIcon className="h-9 w-9" />}
        </button>
      )}
      {!isVip && (
        <Link
          to="/VIP/"
          className="m-auto w-3/4 flex justify-center items-center border-2 border-red p-2"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/gifs/bakalo-${
              Math.floor(Math.random() * 3) + 1
            }.gif`}
            alt="beli-vip-tiket"
          />
        </Link>
      )}
    </div>
  );
};

export default BoardHeader;
