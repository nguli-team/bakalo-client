import { PopularThread } from '../domain/model';
import { PostDto, ThreadDto } from '../adapters/dto';

const mockThread: ThreadDto = {
  opId: 123123,
  boardId: 0,
  title: 'How exactly C makes you a better programming?',
  posterCount: 15,
  replyCount: 25,
  mediaCount: 2
};

export const op: PostDto = {
  id: 123123,
  posterId: '1231512',
  repliedTo: 0,
  mediaUrl:
    'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  text: "Why use C when there's C++ that can do more?",
  createdAt: 1621406917
};

const popularthreadlist: PopularThread[] = Array(8).fill(mockThread);

export default popularthreadlist;
