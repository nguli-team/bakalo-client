import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from './ModalOverlay';
import { AppDispatch } from '../redux/store';
import { loginVip } from '../redux/VipMiddleware';

interface ModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<ModalProps> = ({ onBackdropClick, isModalVisible }) => {
  const [loginForm, setLoginForm] = useState({
    token: '',
    pin: undefined
  });

  const updateLoginForm = (event: { target: any }) => {
    const { target } = event;
    switch (target.name) {
      case 'token':
        setLoginForm({ ...loginForm, token: target.value });
        break;
      case 'pin':
        setLoginForm({ ...loginForm, pin: target.value });
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleLoginSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await dispatch(
        loginVip({
          token: loginForm.token,
          pin: Number(loginForm.pin)
        })
      );
      toast.success('Login Successful! Redirecting to Home', {
        onClose: () => {
          return <Redirect to="" />;
        }
      });
    } catch (err) {
      toast.error('Login Failed!');
    }
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="flex relative flex-col">
      <Modal onBackdropClick={onBackdropClick}>
        <div className="p-6 sm:w-96 rounded-md shadow-xl bg-purple-light">
          <form method="post" onSubmit={handleLoginSubmit}>
            <div className="flex flex-col place-items-center">
              <h1 className="text-4xl text-white mb-12">VIP Login</h1>
              <div className="flex flex-row gap-5">
                <p className="text-white text-xl">Token</p>
                <input
                  required
                  className="mb-3 px-2"
                  type="text"
                  name="token"
                  placeholder=""
                  onChange={updateLoginForm}
                />
              </div>
              <div className="flex flex-row gap-10">
                <p className="text-white text-xl">PIN</p>
                <input
                  required
                  className="mb-3 px-2"
                  type="password"
                  name="pin"
                  placeholder=""
                  onChange={updateLoginForm}
                />
              </div>
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <input
                type="submit"
                className="ml-4 w-1/4 bg-white rounded-md hover:bg-opacity-60"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BaseModalWrapper;
