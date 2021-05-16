import ThreadDto from '../../dto/ThreadDto';
import CreateThreadDto from '../../dto/CreateThreadDto';
import UpdateThreadDto from '../../dto/UpdateThreadDto';

export default interface Thread {
  getThread(opId?: number): Promise<ThreadDto | ThreadDto[]>;
  getPopularThread(): Promise<ThreadDto[]>;
  createThread(thread: CreateThreadDto): Promise<ThreadDto>;
  updateThread(opId: number, thread: UpdateThreadDto): Promise<ThreadDto>;
  removeThread(opId: number): Promise<ThreadDto>;
}
