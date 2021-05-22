import {
  BoardService,
  BookmarkService,
  PostService,
  ThreadService
} from '../../../domain/services/interfaces';

export default interface Services {
  boardService: BoardService;
  threadService: ThreadService;
  postService: PostService;
  bookmarkService: BookmarkService;
}
