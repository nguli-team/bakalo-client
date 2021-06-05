import { Thread } from '../../../domain/model';

export default interface BookmarkRepo {
  getBookmarkIds(): number[];
  getBookmarks(): Promise<Thread[]>;
  createBookmark(opId: number): void;
  removeBookmark(opId: number): void;
}
