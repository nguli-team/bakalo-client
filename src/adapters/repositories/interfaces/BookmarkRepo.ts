import { Thread } from '../../../domain/model';

export default interface BookmarkRepo {
  getBookmarkIds(): number[];
  getBookmarks(): Promise<Thread[]>;
  createBookmark(threadId: number): void;
  removeBookmark(threadId: number): void;
}
