import { Http, WebStorage } from '../infrastuctures';
import { ThreadDto } from '../dto';
import IBookmarkRepo from './interfaces/BookmarkRepo';
import threadlist from '../../utils/threadlist';

export default class MockBookmarkRepo implements IBookmarkRepo {
  constructor(private readonly client: Http, private readonly localStorage: WebStorage) {}

  getBookmarkIds(): number[] {
    return this.localStorage.getItem('bookmark') as number[];
  }

  async getBookmarks(): Promise<ThreadDto[]> {
    const bookmarkIds = this.getBookmarkIds();
    const bookmarks: ThreadDto[] = [];
    for (let i = 0; i < bookmarkIds.length; i += 1) {
      bookmarks.push(threadlist[i]);
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
}
