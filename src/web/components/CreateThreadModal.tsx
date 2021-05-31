import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './ModalOverlay';
import { AppDispatch, RootState } from '../redux/store';
import { Board } from '../../domain/model';
import { CreateThreadDto } from '../../adapters/dto';
import { createThread } from '../redux/ThreadMiddleware';

interface ModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

interface FormData {
  name: string;
  title: string;
  text: string;
  media: File;
  recaptchaResponse?: string;
}

const CreateThreadModal: React.FC<ModalProps> = ({ onBackdropClick, isModalVisible }) => {
  const activeBoard = useSelector((state: RootState) => state.BoardReducer.activeBoard) as Board;

  const initialState: FormData = {
    name: '',
    title: '',
    text: '',
    recaptchaResponse: undefined
  } as FormData;

  const [formData, setFormData] = useState(initialState);

  const handleFileInput = (event: { target: any }) => {
    const file = event.target.files[0];
    setFormData({ ...formData, media: file });
  };

  const handleInputChange = (event: { target: any }) => {
    const { target } = event;

    switch (target.name) {
      case 'posterName': {
        setFormData({ ...formData, name: target.value });
        break;
      }
      case 'title': {
        setFormData({ ...formData, title: target.value });
        break;
      }
      case 'text': {
        setFormData({ ...formData, text: target.value });
        break;
      }
      default:
        break;
    }
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!formData.recaptchaResponse) {
      toast.error('Please verify that you are a human');
      return;
    }
    const createThreadDto: CreateThreadDto = { ...formData, board_id: activeBoard.id };
    dispatch(createThread(createThreadDto));
    onBackdropClick();
  };

  const verifyCallback = (response: string | null) => {
    if (response) {
      setFormData({ ...formData, recaptchaResponse: response });
    }
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="flex relative flex-col">
      <Modal onBackdropClick={onBackdropClick}>
        <div className="p-6 sm:w-96 rounded-md shadow-xl bg-purple-light">
          <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="w-full">
                <input
                  className="mb-3 p-2"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <input
                  className="mb-3 p-2"
                  type="text"
                  name="posterName"
                  placeholder="Name (Anonymous)"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                className="h-32 mb-3 p-2"
                name="text"
                placeholder="Comment"
                value={formData.text}
                onChange={handleInputChange}
              />

              <input
                className="my-1 text-white"
                type="file"
                name="media"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileInput}
              />
            </div>

            <div className="my-2">
              <ReCAPTCHA
                sitekey="6LeogPkaAAAAAM0jcHhbPKEbcrr4pWQeXji6ytQx"
                onChange={verifyCallback}
              />
            </div>

            <div className="my-2">
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

export default CreateThreadModal;
