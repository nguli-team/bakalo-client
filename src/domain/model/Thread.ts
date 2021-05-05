import { Post } from './index';

export default interface Thread {
  opId: number;
  title: string;
  posterCount: number;
  replyCount: number;
  mediaCount: number;
  op: Post;
}
