import Repositories from './interfaces/Repositories';
import Infrastructures from './interfaces/Infrastructures';
import MockBoardRepo from '../../adapters/repositories/mock/MockBoardRepo';
import MockThreadRepo from '../../adapters/repositories/mock/MockThreadRepo';
import MockPostRepo from '../../adapters/repositories/mock/MockPostRepo';
import MockBookmarkRepo from '../../adapters/repositories/mock/MockBookmarkRepo';

export default (infrastructures: Infrastructures): Repositories => ({
  boardRepo: new MockBoardRepo(infrastructures.http),
  threadRepo: new MockThreadRepo(infrastructures.http),
  postRepo: new MockPostRepo(infrastructures.http),
  bookmarkRepo: new MockBookmarkRepo(infrastructures.http, infrastructures.localStorage)
});
