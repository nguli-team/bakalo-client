import { Thread as ThreadModel } from '../../domain/model';
import { Http, WebStorage } from '../infrastuctures';
import IBookmarkRepo from './interfaces/BookmarkRepo';

export default class BookmarkRepo implements IBookmarkRepo {
  constructor(private readonly client: Http, private readonly localStorage: WebStorage) {}

  getBookmarkIds(): number[] {
    return this.localStorage.getItem('bookmark') as number[];
  }

  async getBookmarks(): Promise<ThreadModel[]> {
    const bookmarkIds = this.getBookmarkIds();
    const bookmarks: ThreadModel[] = [];
    bookmarkIds.map(async (id: number) => {
      const thread: ThreadModel = await this.client.get(`bakalo.li/api/thread/${id}`);
      if (!thread) {
        bookmarkIds.slice(bookmarkIds.indexOf(id), 1);
      } else {
        bookmarks.push(thread);
      }
    });
    return bookmarks;
  }

  createBookmark(opId: number): void {
    const bookmarkIds = this.getBookmarkIds();
    bookmarkIds?.push(opId);

    return this.localStorage.setItem('bookmark', bookmarkIds);
  }

  removeBookmark(opId: number): void {
    const bookmarkIds = this.getBookmarkIds();
    const updatedBookmark = bookmarkIds?.filter((id) => id !== opId);

    return this.localStorage.setItem('bookmark', updatedBookmark);
  }
}
