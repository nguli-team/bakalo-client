import IBoardRepo from './interfaces/BoardRepo';
import { Http } from '../infrastuctures';
import BoardDto from '../dto/BoardDto';

export default class BoardRepo implements IBoardRepo {
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
