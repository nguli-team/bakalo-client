import IBoardService from './interfaces/BoardService';
import { Board as BoardRepo } from '../../adapters/repositories/interfaces';
import { Board } from '../model';

export default class BoardService implements IBoardService {
  readonly boardRepo: BoardRepo;

  constructor(boardRepo: BoardRepo) {
    this.boardRepo = boardRepo;
  }

  async getBoard(id: number): Promise<Board> {
    const boardDto = await this.boardRepo.getBoard(id);
    return {
      id: boardDto.id,
      title: boardDto.title,
      shorthand: boardDto.shorthand,
      desc: boardDto.desc
    };
  }

  async getBoards(): Promise<Board[]> {
    const boardsDto = await this.boardRepo.getBoards();
    return boardsDto.map((boardDto) => ({
      id: boardDto.id,
      title: boardDto.title,
      shorthand: boardDto.shorthand,
      desc: boardDto.desc
    }));
  }
}