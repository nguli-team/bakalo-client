import IThreadRepo from './interfaces/ThreadRepo';
import { Http } from '../infrastuctures';
import { ThreadDto, CreateThreadDto, UpdateThreadDto } from '../dto';
import { Thread } from '../../domain/model';

export default class ThreadRepo implements IThreadRepo {
  constructor(private readonly client: Http) {}

  async getThreads(boardId: number): Promise<Thread[]> {
    const threadsDto = await this.client.get<ThreadDto[]>(
      `https://bakalo.li/api/threads?boardId=${boardId}`
    );
    return threadsDto.map((threadDto) => this.mapThreadDtoToThread(threadDto));
  }

  async getThread(opId?: number): Promise<Thread> {
    const threadDto = await this.client.get<ThreadDto>(`https://bakalo.li/api/threads/${opId}`);
    return this.mapThreadDtoToThread(threadDto);
  }

  async getPopularThread(): Promise<Thread[]> {
    const threadsDto = await this.client.get<ThreadDto[]>('https://bakalo.li/api/popular-thread');
    return threadsDto.map((threadDto) => this.mapThreadDtoToThread(threadDto));
  }

  async createThread(thread: CreateThreadDto): Promise<Thread> {
    const threadstring = JSON.stringify(thread);
    const newThreadDto = await this.client.post<ThreadDto>('https://bakalo.li/api/thread', {
      threadstring
    });
    return this.mapThreadDtoToThread(newThreadDto);
  }

  async updateThread(opId: number, thread: UpdateThreadDto): Promise<Thread> {
    const threadstring = JSON.stringify(thread);
    const updatedThreadDto = await this.client.put<ThreadDto>(
      `https://bakalo.li/api/thread/${opId}`,
      { threadstring }
    );
    return this.mapThreadDtoToThread(updatedThreadDto);
  }

  removeThread(opId: number): void {
    this.client.delete(`https://bakalo.li/api/thread/${opId}`);
  }

  private mapThreadDtoToThread = (threadDto: ThreadDto): Thread => ({
    id: threadDto.id,
    boardId: threadDto.board_id,
    title: threadDto.title,
    sticky: threadDto.sticky,
    locked: threadDto.locked,
    opId: threadDto.op_id,
    op: {
      id: threadDto.op.id,
      refNo: threadDto.op.ref,
      threadId: threadDto.op.thread_id,
      // repliedTo?:
      posterId: threadDto.op.poster_id,
      mediaUrl: threadDto.op.media_url,
      name: threadDto.op.name,
      text: threadDto.op.text,
      createdAt: threadDto.op.created_at,
      updatedAt: threadDto.op.updated_at
    },
    posterCount: threadDto.poster_count,
    replyCount: threadDto.poster_count,
    mediaCount: threadDto.poster_count,
    createdAt: threadDto.created_at,
    updatedAt: threadDto.updated_at
  });
}
