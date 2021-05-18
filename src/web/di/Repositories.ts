import Repositories from './interfaces/Repositories';
import { BoardRepo, PostRepo, ThreadRepo } from '../../adapters/repositories';
import Infrastructures from './interfaces/Infrastructures';

export default (infrastructures: Infrastructures): Repositories => ({
  boardRepo: new BoardRepo(infrastructures.http),
  threadRepo: new ThreadRepo(infrastructures.http),
  postRepo: new PostRepo(infrastructures.http)
});
