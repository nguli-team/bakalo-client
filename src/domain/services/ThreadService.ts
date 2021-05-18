import { ThreadRepo, PostRepo } from '../../adapters/repositories/interfaces';
import IThreadService from './interfaces/ThreadService';
import { Thread } from '../model';
import PostDto from '../../adapters/dto/PostDto';
import ThreadDto from '../../adapters/dto/ThreadDto';

export default class ThreadService implements IThreadService {
  constructor(private readonly threadRepo: ThreadRepo, private readonly postRepo: PostRepo) {}

  async getThread(opId: number): Promise<Thread> {
    const threadDto = await this.threadRepo.getThread(opId);
    return this.mapThreadDtoToThread(threadDto);
  }

  async getThreads(boardId: number): Promise<Thread[]> {
    const threadsDto = await this.threadRepo.getThreads(boardId);
    return Promise.all(threadsDto.map(this.mapThreadDtoToThread));
  }

  async getPopularThread(): Promise<Thread[]> {
    const threadsDto = await this.threadRepo.getPopularThread();
    return Promise.all(threadsDto.map(this.mapThreadDtoToThread));
  }

  createThread(thread: ThreadDto): Promise<Thread> {
    return this.threadRepo.createThread(thread);
  }

  updateThread(opId: number, thread: ThreadDto): Promise<Thread> {
    return this.threadRepo.updateThread(opId, thread);
  }

  removeThread(opId: number): void {
    this.threadRepo.removeThread(opId);
  }

  private async mapThreadDtoToThread(threadDto: ThreadDto): Promise<Thread> {
    const postsDto = await this.postRepo.getPost(threadDto.opId);
    const op = postsDto.find((p) => p.id === threadDto.opId) as PostDto;

    return {
      opId: threadDto.opId,
      title: threadDto.title,
      op: { ...op, createdAt: new Date(op.createdAt) },
      posterCount: threadDto.posterCount,
      replyCount: threadDto.replyCount,
      mediaCount: threadDto.mediaCount
    };
  }
}
