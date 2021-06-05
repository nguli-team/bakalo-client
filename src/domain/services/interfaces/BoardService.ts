import { Board } from '../../model';

export default interface BoardService {
  getBoards(): Promise<Board[]>;
  getBoard(id: number): Promise<Board>;
}
