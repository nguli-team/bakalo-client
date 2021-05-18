import IThread from './interfaces/Thread';
import { Http } from '../infrastuctures';
import ThreadDto from '../dto/ThreadDto';
import CreateThreadDto from '../dto/CreateThreadDto';
import UpdateThreadDto from '../dto/UpdateThreadDto';
import { Thread as ThreadModel } from '../../domain/model';

export default class Thread implements IThread {
  // TODO: beresin kalo udah jadi enpoint nya
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  getThreads(boardId: number): Promise<ThreadDto[]> {
    return this.client.get<ThreadDto[]>(`https://bakalo.li/api/threads?boardId=${boardId}`);
  }

  getThread(opId?: number): Promise<ThreadDto> {
    return this.client.get<ThreadDto>(`https://bakalo.li/api/threads/${opId}`);
  }

  getPopularThread(): Promise<ThreadDto[]> {
    return this.client.get<ThreadDto[]>('https://bakalo.li/api/popular-thread');
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
