import BoardDto from '../../dto/BoardDto';

export default interface BoardRepo {
  getBoards(): Promise<BoardDto[]>;
  getBoard(id: number): Promise<BoardDto>;
}
