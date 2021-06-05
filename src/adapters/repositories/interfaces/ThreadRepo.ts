import CreateThreadDto from '../../dto/CreateThreadDto';
import UpdateThreadDto from '../../dto/UpdateThreadDto';
import { Thread } from '../../../domain/model';

export default interface ThreadRepo {
  getThreads(boardId: number): Promise<Thread[]>;
  getThread(id: number): Promise<Thread>;
  getPopularThread(): Promise<Thread[]>;
  createThread(thread: CreateThreadDto): Promise<Thread>;
  updateThread(id: number, thread: UpdateThreadDto): Promise<Thread>;
  removeThread(id: number): void;
}
