import { Http, WebStorage } from '../../infrastuctures';
import { ThreadDto } from '../../dto';
import IBookmarkRepo from '../interfaces/BookmarkRepo';
import threadlist from '../../../utils/threadlist';
import { Thread } from '../../../domain/model';

export default class MockBookmarkRepo implements IBookmarkRepo {
  constructor(private readonly client: Http, private readonly localStorage: WebStorage) {}

  getBookmarkIds(): number[] {
    return this.localStorage.getItem('bookmark') as number[];
  }

  async getBookmarks(): Promise<Thread[]> {
    const bookmarkIds = this.getBookmarkIds();
    const bookmarks: Thread[] = [];
    for (let i = 0; i < bookmarkIds.length; i += 1) {
      bookmarks.push(this.mapThreadDtoToThread(threadlist[i]));
    }
    return bookmarks;
  }

  createBookmark(opId: number): void {
    const bookmarkIds = this.getBookmarkIds();
    if (!bookmarkIds) {
      const bookmarkId = [];
      bookmarkId.push(opId);
      return this.localStorage.setItem('bookmark', bookmarkId);
    }

    bookmarkIds.push(opId);
    return this.localStorage.setItem('bookmark', bookmarkIds);
  }

  removeBookmark(opId: number): void {
    const bookmarkIds = this.getBookmarkIds();
    const updatedBookmark = bookmarkIds?.filter((id) => id !== opId);

    return this.localStorage.setItem('bookmark', updatedBookmark);
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
