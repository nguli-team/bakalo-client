import IBoard from './interfaces/Board';
import { Http } from '../infrastuctures';
import BoardDto from '../dto/BoardDto';

export default class Board implements IBoard {
  // TODO: beresin kalo udah jadi endpoint nya
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  getBoards(): Promise<BoardDto[]> {
    return this.client.get<BoardDto[]>('https://bakalo.li/api/boards');
  }

  getBoard(id: number): Promise<BoardDto> {
    return this.client.get<BoardDto>(`https://bakalo.li/api/boards/${id}`);
  }
}
