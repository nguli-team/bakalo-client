import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Post } from '../../domain/model';
import RepliesModal from './RepliesModal';
import CreatePostModal from './CreatePostModal';

const OP: React.FC<{ op: Post; title: string }> = (props) => {
  const { title, op } = props;

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

  return (
    <div className="rounded-md shadow-md bg-purple-dark m-1 p-3 text-white" id={`${op.refNo}`}>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:max-w-xs sm:max-w-full flex lg:flex-col sm:flex-row justify-items-center items-start lg:px-7 sm:py-3">
          {op.mediaUrl && <img className="lg:w-full w-1/4" src={op.mediaUrl} alt={op.mediaUrl} />}
          {isMobile && (
            <div className="ml-1">
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="text-xs tracking-tighter">
                <span className="font-semibold text-cyan">{op.name || 'Anonymous'}</span>
                {` No.${op.refNo} ${new Date(op.createdAt).toLocaleString()}`}
              </p>
            </div>
          )}
        </div>
        <div className="flex-grow">
          {isDesktop && (
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm tracking-tighter">
                <span className="font-semibold text-cyan">{op.name || 'Anonymous'}</span>
                {` No.${op.id} ${new Date(op.createdAt).toLocaleString()}`}
              </p>
            </div>
          )}
          <p className="my-5 lg:text-base text-sm">{op.text}</p>
          <div className="flex flex-row justify-between">
            {op.replies.length > 0 && (
              <button
                type="button"
                onClick={toggleModal}
                className="text-sm tracking-tighter"
              >{`${op.replies?.length} replies`}</button>
            )}
            <button type="button" onClick={togglePostModal} className="text-sm tracking-tighter">
              Reply to this post
            </button>
          </div>
          <RepliesModal isOpen={modalIsOpen} closeModal={toggleModal} replies={op.replies} />
          <CreatePostModal
            isModalVisible={postModalIsOpen}
            onBackdropClick={togglePostModal}
            refNo={op.refNo}
          />
        </div>
      </div>
    </div>
  );
};
export default OP;
