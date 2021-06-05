import Repositories from './interfaces/Repositories';
import Services from './interfaces/Services';
import {
  BoardService,
  BookmarkService,
  PostService,
  ThreadService,
  VipService
} from '../../domain/services';

export default (repositories: Repositories): Services => ({
  boardService: new BoardService(repositories.boardRepo),
  threadService: new ThreadService(repositories.threadRepo),
  postService: new PostService(repositories.postRepo),
  bookmarkService: new BookmarkService(repositories.bookmarkRepo),
  vipService: new VipService(repositories.vipRepo)
});
