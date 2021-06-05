import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { AppDispatch, RootState } from '../redux/store';
import { CreatePostDto } from '../../adapters/dto';
import { createPost, getPosts } from '../redux/PostMiddleware';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  refNo?: number;
}

interface FormData {
  posterName: string;
  title: string;
  text: string;
  media?: File;
  recaptchaResponse?: string;
  threadId: number;
}

const CreatePostModal: React.FC<ModalProps> = ({ closeModal, isOpen, refNo }) => {
  const { threadId } = useParams<{ threadId: string }>();
  const threadIdNum = Number(threadId);
  const isVip = useSelector((state: RootState) => state.VipReducer.isVip);
  const loading = useSelector((state: RootState) => state.ThreadReducer.loading);

  const initialState: FormData = {
    posterName: '',
    title: '',
    text: refNo ? `>>${refNo}` : '',
    media: undefined,
    recaptchaResponse: undefined,
    threadId: threadIdNum
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
      default:
        break;
    }
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!formData.recaptchaResponse && !isVip) {
      toast.error('Please verify that you are a human');
      return;
    }
    const createPostDto: CreatePostDto = {
      thread_id: formData.threadId,
      media: formData.media,
      name: formData.posterName,
      text: formData.text,
      recaptcha_response: formData.recaptchaResponse
    };
    try {
      await dispatch(createPost(createPostDto));
      await dispatch(getPosts(threadIdNum));
      toast('Balasan berhasil dipos');
      closeModal();
    } catch (err) {
      toast.error('Balasan gagal dipos');
    }
  };

  const verifyCallback = (response: string | null) => {
    // console.log(response);
    if (response) {
      setFormData({ ...formData, recaptchaResponse: response });
    }
  };

  return (
    <div className="flex relative flex-col">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black bg-opacity-50 grid"
        className="place-self-center"
      >
        <div className="p-4 sm:w-96 rounded-md shadow-xl bg-purple-light">
          <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="w-full">
                <input
                  className="mb-3 p-1 w-full"
                  type="text"
                  name="posterName"
                  placeholder="Nama (Anonim)"
                  value={formData.posterName}
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                className="h-32 mb-3 p-1 resize-y"
                name="text"
                placeholder="Komentar"
                required
                value={formData.text}
                onChange={handleInputChange}
              />

              <input
                className="my-1 text-white"
                type="file"
                name="media"
                accept=".jpg, .jpeg, .png, .gif"
                onChange={handleFileInput}
              />
            </div>

            {!isVip && (
              <div className="my-2">
                <ReCAPTCHA
                  sitekey="6LeogPkaAAAAAM0jcHhbPKEbcrr4pWQeXji6ytQx"
                  onChange={verifyCallback}
                />
              </div>
            )}

            <div className="my-2 flex flex-row justify-center">
              <input
                disabled={loading}
                type="submit"
                className="w-1/3 p-2 bg-red text-white rounded-md hover:bg-opacity-60"
                value={loading ? 'Posting...' : 'Post'}
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
