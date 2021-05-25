import { Board } from '../../../domain/model';

export default interface BoardRepo {
  getBoards(): Promise<Board[]>;

  getBoard(id: number): Promise<Board>;
}
