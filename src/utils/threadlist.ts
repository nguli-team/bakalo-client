import { Thread } from '../domain/model';

const mockThread: Thread = {
  opId: 1,
  title: 'How exactly C makes you a better programming?',
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

const threadlist: Thread[] = Array(16).fill(mockThread);

export default threadlist;
