import IBoardRepo from './interfaces/BoardRepo';
import { Http } from '../infrastuctures';
import BoardDto from '../dto/BoardDto';
import { Board } from '../../domain/model';

export default class BoardRepo implements IBoardRepo {
  constructor(private readonly client: Http) {}

  async getBoards(): Promise<Board[]> {
    const boardsDto = await this.client.get<BoardDto[]>('/boards');
    return boardsDto.map((boardDto) => this.mapBoardDtoToBoard(boardDto));
  }

  async getBoard(id: number): Promise<Board> {
    const boardDto = await this.client.get<BoardDto>(`/boards/${id}`);
    return this.mapBoardDtoToBoard(boardDto);
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
