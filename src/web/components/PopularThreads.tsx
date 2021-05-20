import React, { useCallback, useEffect } from 'react';
import './Cards.css';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from './CardItem';
import { Thread } from '../../domain/model';
import { AppDispatch, RootState } from '../redux/store';
import { getBoards } from '../redux/BoardAction';
import di from '../di';

const PopularThreads: React.FC<{ popularThreads: Thread[] }> = (props) => {
  const { popularThreads } = props;
  const dispatch = useDispatch<AppDispatch>();

  const boards = useSelector((state: RootState) => state.BoardReducer.boardList);

  const fetchBoards = useCallback(async () => {
    if (boards.length === 0) {
      dispatch(getBoards(await di.services.boardService.getBoards()));
    }
  }, [boards.length, dispatch]);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  const findBoard = (boardId: number) => boards.find((board) => board.id === boardId);

  const threadMarkup = popularThreads.map((thread: Thread) => {
    const board = findBoard(thread.boardId);
    return (
      <div key={thread.opId} className="m-3">
        <CardItem
          src={thread.op?.mediaUrl}
          thread={thread.title}
          text={thread.op?.text}
          label={board?.title || ''}
          path={`/${board?.shorthand}/${thread.opId}`}
        />
      </div>
    );
  });

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-center text-4xl text-yellow font-bold my-4">Popular Threads</h1>
      <div className="py-7 grid lg:grid-cols-4 sm:grid-cols-2">{threadMarkup}</div>
    </div>
  );
};
export default PopularThreads;
