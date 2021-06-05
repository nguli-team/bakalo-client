import { ThreadRepo } from '../../adapters/repositories/interfaces';
import IThreadService from './interfaces/ThreadService';
import { Thread } from '../model';
import { CreateThreadDto, UpdateThreadDto } from '../../adapters/dto';

export default class ThreadService implements IThreadService {
  constructor(private readonly threadRepo: ThreadRepo) {}

  getThread(opId: number): Promise<Thread> {
    return this.threadRepo.getThread(opId);
  }

  getThreads(boardId: number): Promise<Thread[]> {
    return this.threadRepo.getThreads(boardId);
  }

  getPopularThread(): Promise<Thread[]> {
    return this.threadRepo.getPopularThread();
  }

  createThread(thread: CreateThreadDto): Promise<Thread> {
    return this.threadRepo.createThread(thread);
  }

  removeThread(opId: number): void {
    this.threadRepo.removeThread(opId);
  }

  updateThread(opId: number, thread: UpdateThreadDto): Promise<Thread> {
    return this.threadRepo.updateThread(opId, thread);
  }
}
