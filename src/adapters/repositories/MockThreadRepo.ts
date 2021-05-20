import IThreadRepo from './interfaces/ThreadRepo';
import { Http } from '../infrastuctures';
import { CreateThreadDto, ThreadDto, UpdateThreadDto } from '../dto';
import { Thread as ThreadModel } from '../../domain/model';
import threadlist from '../../utils/threadlist';
import popularthreadlist from '../../utils/popularthreadlist';

export default class MockThreadRepo implements IThreadRepo {
  // TODO: beresin kalo udah jadi enpoint nya
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getThreads(boardId: number): Promise<ThreadDto[]> {
    return threadlist;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getThread(opId?: number): Promise<ThreadDto> {
    return threadlist[0];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getPopularThread(): Promise<ThreadDto[]> {
    return popularthreadlist;
  }

  createThread(thread: CreateThreadDto): Promise<ThreadModel> {
    const threadstring = JSON.stringify(thread);
    return this.client.post<ThreadModel>('https://bakalo.li/api/thread', { threadstring });
  }

  updateThread(opId: number, thread: UpdateThreadDto): Promise<ThreadModel> {
    const threadstring = JSON.stringify(thread);
    return this.client.put<ThreadModel>(`https://bakalo.li/api/thread/${opId}`, {
      threadstring
    });
  }

  removeThread(opId: number): void {
    this.client.delete(`https://bakalo.li/api/thread/${opId}`);
  }
}
