import { PostDto, ThreadDto } from '../adapters/dto';

export const op: PostDto = {
  id: 12398112,
  ref: 1315423,
  poster_id: '1231512',
  thread_id: 0,
  media_file_name:
    'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  text: "Why use C when there's C++ that can do more?",
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const mockThread: ThreadDto = {
  id: 8127938,
  board_id: 2,
  title: 'How exactly C makes you a better programming?',
  sticky: false,
  locked: false,
  op_id: 12398112,
  op,
  poster_count: 15,
  reply_count: 25,
  media_count: 2,
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const op1: PostDto = {
  id: 534523,
  ref: 5234121,
  poster_id: '1231512',
  thread_id: 0,
  media_file_name: 'https://image.dek-d.com/27/0662/4329/130711065',
  text: 'What are you working on, /g/?',
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const mockThread1: ThreadDto = {
  id: 89173123,
  board_id: 2,
  title: '/dpt/ - Daily Programming Thread',
  sticky: false,
  locked: false,
  op_id: 123,
  op: op1,
  poster_count: 15,
  reply_count: 25,
  media_count: 2,
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const op2: PostDto = {
  id: 1312313,
  ref: 12315675,
  poster_id: '1231512',
  thread_id: 0,
  media_file_name: 'https://devcom.com/wp-content/uploads/2019/08/methodology-agile.png',
  text:
    'Hi /g/\nI have an interview tomorrow, and I\'m required to present a short pitch about a topic of my own choice that is related to "Working Agile".\n\nAny ideas on what I could talk about? Maybe an often overlooked technique?\n\nAny suggestions are appreciated! :)',
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const mockThread2: ThreadDto = {
  id: 1412322123,
  board_id: 2,
  title: 'Topic for interview pitch on agile',
  sticky: false,
  locked: false,
  op_id: 123,
  op: op2,
  poster_count: 15,
  reply_count: 25,
  media_count: 2,
  created_at: 1621406917000,
  updated_at: 1621406917000
};

export const op3: PostDto = {
  id: 1431231231,
  ref: 14123123,
  poster_id: '1231512',
  thread_id: 0,
  media_file_name: 'https://i.imgur.com/sFI5HV4.png',
  text: 'You know the drill.',
  created_at: 1621406917000,
  updated_at: 1621406917000
};

const mockThread3: ThreadDto = {
  id: 152341312,
  board_id: 2,
  title: 'Desktop Thread',
  sticky: false,
  locked: false,
  op_id: 123,
  op: op3,
  poster_count: 15,
  reply_count: 25,
  media_count: 2,
  created_at: 1621406917000,
  updated_at: 1621406917000
};
const threadlist: ThreadDto[] = [];
threadlist.push(mockThread);
threadlist.push(mockThread1);
threadlist.push(mockThread2);
threadlist.push(mockThread3);
export default threadlist;
