import IThreadRepo from './interfaces/ThreadRepo';
import { Http } from '../infrastuctures';
import { ThreadDto, CreateThreadDto, UpdateThreadDto } from '../dto';
import { Thread } from '../../domain/model';

export default class ThreadRepo implements IThreadRepo {
  constructor(private readonly client: Http) {}

  async getThreads(boardId: number): Promise<Thread[]> {
    const threadsDto = await this.client.get<ThreadDto[]>(`threads?board_id=${boardId}`);
    return threadsDto.map((threadDto) => this.mapThreadDtoToThread(threadDto));
  }

  async getThread(opId?: number): Promise<Thread> {
    const threadDto = await this.client.get<ThreadDto>(`thread/${opId}`);
    return this.mapThreadDtoToThread(threadDto);
  }

  async getPopularThread(): Promise<Thread[]> {
    const threadsDto = await this.client.get<ThreadDto[]>('threads/popular');
    return threadsDto.map((threadDto) => this.mapThreadDtoToThread(threadDto));
  }

  async createThread(thread: CreateThreadDto): Promise<Thread> {
    const formData = new FormData();
    formData.append('board_id', thread.board_id.toString());
    formData.append('title', thread.title.toString());
    if (thread.name) {
      formData.append('name', thread.name.toString());
    }
    formData.append('text', thread.text.toString());
    formData.append('media', thread.media);
    const newThreadDto = await this.client.post<ThreadDto>('thread', formData, {
      'Content-Type': 'multipart/form-data'
    });
    return this.mapThreadDtoToThread(newThreadDto);
  }

  async updateThread(opId: number, thread: UpdateThreadDto): Promise<Thread> {
    const threadstring = JSON.stringify(thread);
    const updatedThreadDto = await this.client.put<ThreadDto>(`thread/${opId}`, { threadstring });
    return this.mapThreadDtoToThread(updatedThreadDto);
  }

  removeThread(opId: number): void {
    this.client.delete(`thread/${opId}`);
  }

  mapThreadDtoToThread = (threadDto: ThreadDto): Thread => ({
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
      replies: [],
      posterId: threadDto.op.poster_id,
      mediaUrl: threadDto.op.media_file_name
        ? `${process.env.REACT_APP_MEDIA_SERVER}${threadDto.op.media_file_name}`
        : undefined,
      mediaFileName: threadDto.op.media_file_name || undefined,
      name: threadDto.op.name,
      text: threadDto.op.text,
      createdAt: threadDto.op.created_at * 1000,
      updatedAt: threadDto.op.updated_at * 1000,
      isYou: threadDto.op.is_you
    },
    posterCount: threadDto.poster_count,
    replyCount: threadDto.reply_count,
    mediaCount: threadDto.media_count,
    createdAt: threadDto.created_at * 1000,
    updatedAt: threadDto.updated_at * 1000,
    isYou: threadDto.is_you
  });
}
