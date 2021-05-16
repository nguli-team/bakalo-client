import IThread from './interfaces/Thread';
import { Http } from '../infrastuctures';
import ThreadDto from '../dto/ThreadDto';
import CreateThreadDto from '../dto/CreateThreadDto';
import UpdateThreadDto from '../dto/UpdateThreadDto';

export default class Thread implements IThread {
  // TODO: beresin kalo udah jadi enpoint nya
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  getThread(opId?: number): Promise<ThreadDto | ThreadDto[]> {
    if (opId) {
      return this.client.get<ThreadDto>(`https://bakalo.li/api/threads/${opId}`);
    }
    return this.client.get<ThreadDto[]>('https://bakalo.li/api/threads');
  }

  getPopularThread(): Promise<ThreadDto[]> {
    return this.client.get<ThreadDto[]>('https://bakalo.li/api/popular-thread');
  }

  createThread(thread: CreateThreadDto): Promise<ThreadDto> {
    const threadstring = JSON.stringify(thread);
    return this.client.post<ThreadDto>('https://bakalo.li/api/thread', { threadstring });
  }

  updateThread(opId: number, thread: UpdateThreadDto): Promise<ThreadDto> {
    const threadstring = JSON.stringify(thread);
    return this.client.put<ThreadDto>(`https://bakalo.li/api/thread/${opId}`, {
      threadstring
    });
  }

  removeThread(opId: number): Promise<ThreadDto> {
    return this.client.delete<ThreadDto>(`https://bakalo.li/api/thread/${opId}`);
  }
}
