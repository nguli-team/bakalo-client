import React, { useState } from 'react';
import Recaptcha from 'react-recaptcha';
import Modal from './ModalOverlay';

interface ModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<ModalProps> = ({ onBackdropClick, isModalVisible }) => {
  const initialState = {
    isVerified: false
  };

  const [data, setData] = useState(initialState);

  const onloadCallback = () => {
    // eslint-disable-next-line no-console
    console.log('captcha successfully loaded');
  };

  const verifyCallback = (response: string) => {
    // eslint-disable-next-line no-console
    console.log(response);
    if (response) {
      setData({
        ...data,
        isVerified: true
      });
    }
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="flex relative flex-col">
      <Modal onBackdropClick={onBackdropClick}>
        <div className="p-6 sm:w-96 rounded-md shadow-xl bg-purple-light">
          <form method="post" encType="multipart/form-data">
            <div className="flex flex-col">
              <input className="mb-3 px-2" type="text" name="name" placeholder="Name (Anonymous)" />
              <textarea className="h-32 mb-3 px-2" name="comment" placeholder="Comment" />

              <input
                className="my-1 text-white"
                type="file"
                name="upFile"
                accept=".jpg, .jpeg, .png"
              />
            </div>

            <div className="my-2">
              <Recaptcha
                sitekey="6LfuJMUaAAAAANbKelhqJaR_pYDNbpgVVqXPOXBs"
                render="explicit"
                onloadCallback={onloadCallback}
                verifyCallback={verifyCallback}
              />
            </div>

            <div className="flex flex-rows h-8">
              <select className="w-2/3 px-2" name="post">
                <option value="newThread">New Thread</option>
                <option value="newPost">New Post</option>
              </select>
              <input
                type="submit"
                className="ml-4 w-1/3 bg-red text-white rounded-md hover:bg-opacity-60"
                value="Post"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BaseModalWrapper;
