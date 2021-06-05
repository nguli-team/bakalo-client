import IBoardService from './interfaces/BoardService';
import { BoardRepo } from '../../adapters/repositories/interfaces';
import { Board } from '../model';

export default class BoardService implements IBoardService {
  readonly boardRepo: BoardRepo;

  constructor(boardRepo: BoardRepo) {
    this.boardRepo = boardRepo;
  }

  async getBoard(id: number): Promise<Board> {
    return this.boardRepo.getBoard(id);
  }

  async getBoards(): Promise<Board[]> {
    return this.boardRepo.getBoards();
  }
}
