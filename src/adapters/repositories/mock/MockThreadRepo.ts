import IThreadRepo from '../interfaces/ThreadRepo';
import { Http } from '../../infrastuctures';
import { CreateThreadDto, ThreadDto, UpdateThreadDto } from '../../dto';
import { Thread } from '../../../domain/model';
import threadlist from '../../../utils/threadlist';
import popularthreadlist from '../../../utils/popularthreadlist';

export default class MockThreadRepo implements IThreadRepo {
  // TODO: beresin kalo udah jadi enpoint nya

  constructor(private readonly client: Http) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getThreads(boardId: number): Promise<Thread[]> {
    const threadsDto = threadlist.filter((thread) => thread.board_id === boardId);
    return threadsDto.map((threadDto) => this.mapThreadDtoToThread(threadDto));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getThread(opId?: number): Promise<Thread> {
    return this.mapThreadDtoToThread(threadlist.find((thread) => thread.id === opId) as ThreadDto);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getPopularThread(): Promise<Thread[]> {
    return popularthreadlist.map((threadDto) => this.mapThreadDtoToThread(threadDto));
  }

  async createThread(thread: CreateThreadDto): Promise<Thread> {
    const newThreadDto: ThreadDto = {
      id: 13141212,
      board_id: thread.board_id,
      title: thread.title,
      sticky: false,
      locked: false,
      op_id: 16263871,
      op: {
        id: 16263871,
        ref: 3891723,
        thread_id: 13141212,
        // repliedTo?:
        poster_id: '1231412123',
        media_file_name:
          'https://www.b.wikiage.org/wp-content/uploads/2020/11/What-Does-KEKW-Mean-On-Twitch-KEKW-Meaning-Explained-580x381.png',
        name: thread.name,
        text: thread.text,
        created_at: 1232531231234,
        updated_at: 1232531231234
      },
      poster_count: 1,
      reply_count: 0,
      media_count: 1,
      created_at: 1232531231234,
      updated_at: 1232531231234
    };

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
      mediaUrl: threadDto.op.media_file_name,
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
