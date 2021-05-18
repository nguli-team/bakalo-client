import Repositories from './interfaces/Repositories';
import Services from './interfaces/Services';
import { BoardService, PostService, ThreadService } from '../../domain/services';

export default (repositories: Repositories): Services => ({
  boardService: new BoardService(repositories.boardRepo),
  threadService: new ThreadService(repositories.threadRepo, repositories.postRepo),
  postService: new PostService(repositories.postRepo)
});
