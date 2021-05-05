import { PopularThread } from '../domain/model';
import boardlist from './boardlist';

const mockThread: PopularThread = {
  opId: 1,
  title: 'How exactly C makes you a better programming?',
  board: boardlist[0],
  posterCount: 15,
  replyCount: 25,
  mediaCount: 2,
  op: {
    id: 31231,
    posterId: '1231512',
    mediaUrl:
      'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    desc: "Why use C when there's C++ that can do more?",
    createdAt: new Date()
  }
};

const popularthreadlist: PopularThread[] = Array(8).fill(mockThread);

export default popularthreadlist;
