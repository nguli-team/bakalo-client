import {
  BoardRepo,
  BookmarkRepo,
  PostRepo,
  ThreadRepo
} from '../../../adapters/repositories/interfaces';

export default interface Repositories {
  boardRepo: BoardRepo;
  threadRepo: ThreadRepo;
  postRepo: PostRepo;
  bookmarkRepo: BookmarkRepo;
}
