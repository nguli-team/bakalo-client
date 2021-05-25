import IBoardRepo from '../interfaces/BoardRepo';
import { Http } from '../../infrastuctures';
import BoardDto from '../../dto/BoardDto';
import boardlist from '../../../utils/boardlist';
import { Board } from '../../../domain/model';

export default class MockBoardRepo implements IBoardRepo {
  // TODO: beresin kalo udah jadi endpoint nya
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  // eslint-disable-next-line class-methods-use-this
  async getBoards(): Promise<Board[]> {
    return boardlist.map((board) => this.mapBoardDtoToBoard(board));
  }

  getBoard(id: number): Promise<Board> {
    return this.client.get<Board>(`https://bakalo.li/api/boards/${id}`);
  }

  private mapBoardDtoToBoard = (boardDto: BoardDto): Board => ({
    id: boardDto.id,
    shorthand: boardDto.shorthand,
    name: boardDto.name,
    description: boardDto.description,
    refCounter: boardDto.ref_counter,
    vipOnly: boardDto.vip_only,
    createdAt: boardDto.created_at,
    updatedAt: boardDto.updated_at
  });
}
