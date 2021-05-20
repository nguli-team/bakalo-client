import { PostDto, ThreadDto } from '../adapters/dto';

const mockThread: ThreadDto = {
  opId: 123,
  boardId: 2,
  title: 'How exactly C makes you a better programming?',
  posterCount: 15,
  replyCount: 25,
  mediaCount: 2
};

export const op: PostDto = {
  id: 123,
  posterId: '1231512',
  repliedTo: 0,
  mediaUrl:
    'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  text: "Why use C when there's C++ that can do more?",
  createdAt: 1621406917
};

const threadlist: ThreadDto[] = Array(16).fill(mockThread);

export default threadlist;
