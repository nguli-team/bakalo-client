import { PostDto, ThreadDto } from '../adapters/dto';

export const op: PostDto = {
  id: 123123,
  ref: 1315423,
  poster_id: '1231512',
  thread_id: 0,
  media_url:
    'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  text: "Why use C when there's C++ that can do more?",
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const mockThread: ThreadDto = {
  id: 123,
  board_id: 2,
  title: '[Popular] How exactly C makes you a better programming?',
  sticky: false,
  locked: false,
  op_id: 123,
  op,
  poster_count: 15,
  reply_count: 25,
  media_count: 2,
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const popularthreadlist: ThreadDto[] = Array(8).fill(mockThread);

export default popularthreadlist;
