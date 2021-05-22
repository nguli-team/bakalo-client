import Repositories from './interfaces/Repositories';
import Infrastructures from './interfaces/Infrastructures';
import MockBoardRepo from '../../adapters/repositories/MockBoardRepo';
import MockThreadRepo from '../../adapters/repositories/MockThreadRepo';
import MockPostRepo from '../../adapters/repositories/MockPostRepo';
import MockBookmarkRepo from '../../adapters/repositories/MockBookmarkRepo';

export default (infrastructures: Infrastructures): Repositories => ({
  boardRepo: new MockBoardRepo(infrastructures.http),
  threadRepo: new MockThreadRepo(infrastructures.http),
  postRepo: new MockPostRepo(infrastructures.http),
  bookmarkRepo: new MockBookmarkRepo(infrastructures.http, infrastructures.localStorage)
});
