import ThreadDto from '../../dto/ThreadDto';
import CreateThreadDto from '../../dto/CreateThreadDto';
import UpdateThreadDto from '../../dto/UpdateThreadDto';
import { Thread as ThreadModel } from '../../../domain/model';

export default interface ThreadRepo {
  getThreads(boardId: number): Promise<ThreadDto[]>;
  getThread(opId: number): Promise<ThreadDto>;
  getPopularThread(): Promise<ThreadDto[]>;
  createThread(thread: CreateThreadDto): Promise<ThreadModel>;
  updateThread(opId: number, thread: UpdateThreadDto): Promise<ThreadModel>;
  removeThread(opId: number): void;
}
