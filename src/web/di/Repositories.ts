import Repositories from './interfaces/Repositories';
import Infrastructures from './interfaces/Infrastructures';
import {
  BoardRepo,
  BookmarkRepo,
  PostRepo,
  ThreadRepo,
  VipRepo
} from '../../adapters/repositories';

export default (infrastructures: Infrastructures): Repositories => ({
  boardRepo: new BoardRepo(infrastructures.http),
  threadRepo: new ThreadRepo(infrastructures.http),
  postRepo: new PostRepo(infrastructures.http),
  bookmarkRepo: new BookmarkRepo(infrastructures.http, infrastructures.localStorage),
  vipRepo: new VipRepo(infrastructures.http, infrastructures.localStorage)
});
