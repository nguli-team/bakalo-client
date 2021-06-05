import { Thread } from '../../model';

export default interface BookmarkService {
  getBookmarks(): Promise<Thread[]>;
  checkBookmarks(opId: number): boolean;
  createBookmark(opId: number): void;
  removeBookmark(opId: number): void;
}
