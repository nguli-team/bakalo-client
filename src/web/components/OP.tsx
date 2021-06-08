import React from 'react';
import reactStringReplace from 'react-string-replace';
import { Post } from '../../domain/model';
import RepliesModal from './RepliesModal';
import CreatePostModal from './CreatePostModal';

const OP: React.FC<{ title: string; op: Post }> = ({ title, op }) => {
  const { refNo, mediaUrl, mediaFileName, name, createdAt, text, replies, isYou, posterId } = op;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    setIsOpen((modalWasOpen) => !modalWasOpen);
  }

  const [postModalIsOpen, setPostModal] = React.useState(false);

  function togglePostModal() {
    setPostModal((modalWasOpen) => !modalWasOpen);
  }

  return (
    <div className="rounded-md shadow-md m-1 p-3 bg-purple-dark text-white" id={`${refNo}`}>
      <div className="grid grid-cols-5 gap-2">
        {mediaUrl && (
          <div className="col-span-1">
            <a href={mediaUrl} rel="noreferrer" target="_blank">
              <img src={mediaUrl} alt={mediaFileName} />
            </a>
          </div>
        )}
        <div className={`${mediaUrl ? 'col-span-4' : 'col-span-5'} flex flex-col justify-between`}>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm tracking-tighter">
              <span className="font-semibold text-cyan">{isYou ? 'Anda' : name || 'Anonim'}</span>
              <span className="font-semibold text-yellow">{` ID: ${posterId}`}</span>
              {` No.${refNo} ${new Date(createdAt).toLocaleString()}`}
            </p>
          </div>
          <p className="flex-grow my-2 lg:text-base text-sm whitespace-pre-wrap break-words">
            {reactStringReplace(text, />>(\d+)/gm, (match) => (
              <a key={match} href={`#${match}`} className="text-yellow">
                {`>>${match}`}
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
          <RepliesModal isOpen={modalIsOpen} closeModal={toggleModal} replies={replies} />
          <CreatePostModal isOpen={postModalIsOpen} closeModal={togglePostModal} refNo={refNo} />
        </div>
      </div>
    </div>
  );
};
export default OP;
