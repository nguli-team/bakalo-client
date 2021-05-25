import Post from './Post';

export default interface Thread {
  id: number;
  boardId: number;
  title: string;
  sticky: boolean;
  locked: boolean;
  opId: number;
  op: Post;
  posterCount: number;
  replyCount: number;
  mediaCount: number;
  createdAt: number;
  updatedAt: number;
}
