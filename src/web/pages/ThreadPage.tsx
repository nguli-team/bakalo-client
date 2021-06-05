import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ThreadPosts, CreatePostModal, Navbar } from '../components';
import { setActiveBoard } from '../redux/BoardAction';
import { getThread } from '../redux/ThreadMiddleware';
import { getPosts } from '../redux/PostMiddleware';
import { getBoards } from '../redux/BoardMiddleware';
import BoardHeader from '../components/BoardHeader';

const ThreadPage: React.FC = () => {
  const { boardShorthand, threadId } = useParams<{ boardShorthand: string; threadId: string }>();
  const threadIdNumber = Number(threadId);
  const dispatch = useDispatch();

  const boards = useSelector((state: RootState) => state.BoardReducer.boardList).length;

  const loading = useSelector((state: RootState) => state.ThreadReducer.loading);

  const fetchPageData = useCallback(async () => {
    if (boards === 0) {
      dispatch(getBoards());
    }
    dispatch(setActiveBoard({ boardShorthand }));
    dispatch(getThread(threadIdNumber));
    dispatch(getPosts(threadIdNumber));
  }, [boardShorthand, boards, dispatch, threadIdNumber]);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]);

  const thread = useSelector((state: RootState) => state.ThreadReducer.activeThread);
  const replies = useSelector((state: RootState) => state.ThreadReducer.posts);

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <div className="flex-grow">
      <Navbar />
      {loading && <div className="mt-64 text-center text-white text-3xl">Loading...</div>}
      {!loading && (
        <div className="my-7 lg:mx-96 grid justify-items-center align-start">
          <BoardHeader toggleModal={toggleModal} />
          {replies.length > 0 && <ThreadPosts title={thread?.title as string} posts={replies} />}
          {replies.length === 0 && (
            <div className="m-auto">
              <p className="text-2xl text-white text-center">Belum ada balasan</p>
            </div>
          )}
          <CreatePostModal isOpen={isOpen} closeModal={toggleModal} />
        </div>
      )}
    </div>
  );
};
export default ThreadPage;
