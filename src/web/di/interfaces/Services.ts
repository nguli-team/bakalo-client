import {
  BoardService,
  BookmarkService,
  PostService,
  ThreadService,
  VipService
} from '../../../domain/services/interfaces';

export default interface Services {
  boardService: BoardService;
  threadService: ThreadService;
  postService: PostService;
  bookmarkService: BookmarkService;
  vipService: VipService;
}
