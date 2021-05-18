import BoardDto from '../../dto/BoardDto';

export default interface Board {
  getBoards(): Promise<BoardDto[]>;
  getBoard(id: number): Promise<BoardDto>;
}
