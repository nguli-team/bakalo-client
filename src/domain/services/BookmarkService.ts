import { BookmarkRepo } from '../../adapters/repositories/interfaces';
import { Thread } from '../model';
import IBookmarkService from './interfaces/BookmarkService';

export default class BookmarkService implements IBookmarkService {
  constructor(private readonly bookmarkRepo: BookmarkRepo) {}

  async getBookmarks(): Promise<Thread[]> {
    return this.bookmarkRepo.getBookmarks();
  }

  checkBookmarks(opId: number): boolean {
    const bookmarksIds = this.bookmarkRepo.getBookmarkIds();
    if (!bookmarksIds) return false;
    return !!bookmarksIds.find((bookmarkId) => bookmarkId === opId);
  }

  createBookmark(opId: number): void {
    this.bookmarkRepo.createBookmark(opId);
  }

  removeBookmark(opId: number): void {
    this.bookmarkRepo.removeBookmark(opId);
  }
}
