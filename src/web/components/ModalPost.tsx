import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './ModalOverlay';
import { AppDispatch, RootState } from '../redux/store';
import { Board } from '../../domain/model';
import { CreatePostDto, CreateThreadDto } from '../../adapters/dto';
import di from '../di';
import { createPost } from '../redux/PostMiddleware';

interface ModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

interface FormData {
  posterName: string;
  title: string;
  text: string;
  media?: File;
  isVerified: boolean;
  threadId: number;
}

const BaseModalWrapper: React.FC<ModalProps> = ({ onBackdropClick, isModalVisible }) => {
  const { threadId } = useParams<{ threadId: string }>();
  const threadIdNum = Number(threadId);
  const activeBoard = useSelector((state: RootState) => state.BoardReducer.activeBoard) as Board;
  const activeThread = useSelector((state: RootState) => state.ThreadReducer.activeThread);
  const threadList = useSelector((state: RootState) => state.BoardReducer.threadList);

  const initialState: FormData = {
    posterName: '',
    title: '',
    text: '',
    media: undefined,
    isVerified: false,
    threadId: threadIdNum || 0
  };

  const [formData, setFormData] = useState(initialState);

  const handleFileInput = (event: { target: any }) => {
    const file = event.target.files[0];
    setFormData({ ...formData, media: file });
  };

  const handleInputChange = (event: { target: any }) => {
    const { target } = event;

    switch (target.name) {
      case 'posterName': {
        setFormData({ ...formData, posterName: target.value });
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
      case 'threadId': {
        setFormData({ ...formData, threadId: target.value });
        break;
      }
      default:
        break;
    }
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!formData.isVerified) {
      toast.error('Please verify that you are a human');
      return;
    }
    if (threadId) {
      const createPostDto: CreatePostDto = { ...formData };
      dispatch(createPost(createPostDto));
    } else {
      const createThreadDto: CreateThreadDto = { ...formData, boardId: activeBoard.id };
      di.services.threadService.createThread(createThreadDto);
    }
    onBackdropClick();
  };

  const verifyCallback = (response: string | null) => {
    // console.log(response);
    if (response) {
      setFormData({ ...formData, isVerified: true });
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
                {!threadId && (
                  <input
                    className="mb-3 p-2"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                )}
                <input
                  className="mb-3 p-2"
                  type="text"
                  name="posterName"
                  placeholder="Name (Anonymous)"
                  value={formData.posterName}
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
                sitekey="6LfuJMUaAAAAANbKelhqJaR_pYDNbpgVVqXPOXBs"
                onChange={verifyCallback}
              />
            </div>

            <div className="flex flex-rows h-8">
              <select
                className="w-2/3 px-2 text-sm"
                name="threadId"
                value={formData.threadId}
                onChange={handleInputChange}
              >
                {threadId && (
                  <option value={activeThread?.id}>
                    {`${activeThread?.id} - ${activeThread?.title}`}
                  </option>
                )}
                {!threadId && <option value={0}>New Thread</option>}
                {!threadId &&
                  threadList.map((thread) => (
                    <option value={thread.id}>{`${thread.id} - ${thread.title}`}</option>
                  ))}
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
