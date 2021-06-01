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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <div>
      <Navbar />
      {loading && (
        <div className="w-full min-h-full text-center text-white text-3xl flex justify-center align-middle">
          Loading...
        </div>
      )}
      {!loading && (
        <div className="my-7 lg:mx-96 grid justify-items-center align-start">
          <BoardHeader toggleModal={toggleModal} />
          {replies.length > 0 && <ThreadPosts title={thread?.title as string} posts={replies} />}
          {replies.length === 0 && (
            <div className="m-auto">
              <p className="text-2xl text-white text-center">There are no replies at this moment</p>
            </div>
          )}
          <CreatePostModal isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
        </div>
      )}
    </div>
  );
};
export default ThreadPage;
