import Board from './Board';
import Thread from './Thread';

export default interface PopularThread extends Thread {
  board: Board;
}
