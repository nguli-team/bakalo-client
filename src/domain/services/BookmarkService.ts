import { BookmarkRepo, PostRepo } from '../../adapters/repositories/interfaces';
import { Thread } from '../model';
import IBookmarkService from './interfaces/BookmarkService';
import ThreadDto from '../../adapters/dto/ThreadDto';

export default class BookmarkService implements IBookmarkService {
  constructor(private readonly bookmarkRepo: BookmarkRepo, private readonly postRepo: PostRepo) {}

  async getBookmarks(): Promise<Thread[]> {
    const bookmarksDto = await this.bookmarkRepo.getBookmarks();

    return Promise.all(
      bookmarksDto.map(async (bookmarkDto) => this.mapThreadDtoToThread(bookmarkDto))
    );
  }

  checkBookmarks(opId: number): boolean {
    const bookmarksIds = this.bookmarkRepo.getBookmarkIds();
    return !!bookmarksIds.find((bookmarkId) => bookmarkId === opId);
  }

  createBookmark(opId: number): void {
    this.bookmarkRepo.createBookmark(opId);
  }

  removeBookmark(opId: number): void {
    this.bookmarkRepo.removeBookmark(opId);
  }

  private async mapThreadDtoToThread(threadDto: ThreadDto): Promise<Thread> {
    const op = await this.postRepo.getPost(threadDto.opId);

    return {
      opId: threadDto.opId,
      boardId: threadDto.boardId,
      title: threadDto.title,
      op: { ...op, createdAt: new Date(op.createdAt) },
      posterCount: threadDto.posterCount,
      replyCount: threadDto.replyCount,
      mediaCount: threadDto.mediaCount
    };
  }
}
