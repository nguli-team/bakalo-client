import { Thread } from '../../model';
import { CreateThreadDto, UpdateThreadDto } from '../../../adapters/dto';

export default interface ThreadService {
  getThread(opId: number): Promise<Thread>;
  getThreads(boardId: number): Promise<Thread[]>;
  getPopularThread(): Promise<Thread[]>;
  createThread(thread: CreateThreadDto): Promise<Thread>;
  updateThread(opId: number, thread: UpdateThreadDto): Promise<Thread>;
  removeThread(opId: number): void;
}
