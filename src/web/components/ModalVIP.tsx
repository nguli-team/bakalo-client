import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './ModalOverlay';

interface ModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<ModalProps> = ({ onBackdropClick, isModalVisible }) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="flex relative flex-col">
      <Modal onBackdropClick={onBackdropClick}>
        <div className="p-6 sm:w-96 rounded-md shadow-xl bg-purple-light">
          <form method="post" encType="multipart/form-data">
            <div className="flex flex-col place-items-center">
              <h1 className="text-4xl text-white mb-12">VIP Login</h1>
              <div className="flex flex-row gap-5">
                <p className="text-white text-xl">Token</p>
                <input className="mb-3 px-2" type="text" name="token" placeholder="" />
              </div>
              <div className="flex flex-row gap-10">
                <p className="text-white text-xl">PIN</p>
                <input className="mb-3 px-2" type="password" name="pin" placeholder="" />
              </div>
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <div className="flex-row my-3 text-sm text-white">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember"> Ingat Perangkat Ini</label>
              </div>
              <input
                type="submit"
                className="ml-4 w-1/4 bg-white rounded-md hover:bg-opacity-60"
                value="Submit"
              />
              <Link to="/Reset" className="mt-5 text-white text-xs hover:text-yellow">
                Lupa PIN?
              </Link>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BaseModalWrapper;
