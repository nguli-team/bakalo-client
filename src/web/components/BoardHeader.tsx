import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { PencilIcon } from '@heroicons/react/solid';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';

const BoardHeader: React.FC<{ toggleModal: () => void }> = (props) => {
  const { toggleModal } = props;
  const { threadId } = useParams<{ threadId: string }>();
  const boardInfo = useSelector((state: RootState) => state.BoardReducer.activeBoard);

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
            {threadId ? 'Post a Reply' : 'Start a Thread'}
          </button>
        </div>
      )}
      {isMobile && (
        <button
          type="button"
          onClick={toggleModal}
          className="fixed rounded-full bg-red text-white right-5 bottom-5 p-3"
        >
          <PencilIcon className="h-9 w-9" />
        </button>
      )}
    </div>
  );
};

export default BoardHeader;
