import ThreadDto from '../../dto/ThreadDto';

export default interface BookmarkRepo {
  getBookmarkIds(): number[];
  getBookmarks(): Promise<ThreadDto[]>;
  createBookmark(opId: number): void;
  removeBookmark(opId: number): void;
}
