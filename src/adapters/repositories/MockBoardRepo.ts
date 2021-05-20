import IBoardRepo from './interfaces/BoardRepo';
import { Http } from '../infrastuctures';
import BoardDto from '../dto/BoardDto';
import boardlist from '../../utils/boardlist';

export default class MockBoardRepo implements IBoardRepo {
  // TODO: beresin kalo udah jadi endpoint nya
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  // eslint-disable-next-line class-methods-use-this
  async getBoards(): Promise<BoardDto[]> {
    return boardlist;
  }

  getBoard(id: number): Promise<BoardDto> {
    return this.client.get<BoardDto>(`https://bakalo.li/api/boards/${id}`);
  }
}
