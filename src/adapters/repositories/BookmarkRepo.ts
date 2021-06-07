import { Thread } from '../../domain/model';
import { Http, WebStorage } from '../infrastuctures';
import IBookmarkRepo from './interfaces/BookmarkRepo';
import { ThreadDto } from '../dto';

export default class BookmarkRepo implements IBookmarkRepo {
  private readonly bookmarkKey = 'bookmark';

  constructor(private readonly client: Http, private readonly localStorage: WebStorage) {}

  getBookmarkIds(): number[] {
    return this.localStorage.getItem(this.bookmarkKey) as number[];
  }

  async getBookmarks(): Promise<Thread[]> {
    const bookmarkIds = this.getBookmarkIds();
    return Promise.all(
      bookmarkIds.map(async (id: number) => {
        const threadDto: ThreadDto = await this.client.get(`thread/${id}`);
        if (!threadDto) {
          bookmarkIds.slice(bookmarkIds.indexOf(id), 1);
        }
        return this.mapThreadDtoToThread(threadDto);
      })
    );
  }

  createBookmark(threadId: number): void {
    const bookmarkIds = this.getBookmarkIds() || [];

    bookmarkIds.push(threadId);
    return this.localStorage.setItem(this.bookmarkKey, bookmarkIds);
  }

  removeBookmark(opId: number): void {
    const bookmarkIds = this.getBookmarkIds();
    const updatedBookmark = bookmarkIds?.filter((id) => id !== opId);

    return this.localStorage.setItem(this.bookmarkKey, updatedBookmark);
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
      replies: [],
      posterId: threadDto.op.poster_id,
      mediaUrl: `${process.env.REACT_APP_MEDIA_SERVER}${threadDto.op.media_file_name}`,
      name: threadDto.op.name,
      text: threadDto.op.text,
      createdAt: threadDto.op.created_at,
      updatedAt: threadDto.op.updated_at,
      isYou: threadDto.op.is_you
    },
    posterCount: threadDto.poster_count,
    replyCount: threadDto.poster_count,
    mediaCount: threadDto.poster_count,
    createdAt: threadDto.created_at,
    updatedAt: threadDto.updated_at,
    isYou: threadDto.is_you
  });
}
