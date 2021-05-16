import BoardDto from '../../dto/BoardDto';

export default interface Board {
  getBoard(id?: number): Promise<BoardDto | BoardDto[]>;
}
