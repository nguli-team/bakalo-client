export default interface Board {
  id: number;
  shorthand: string;
  name: string;
  description: string;
  refCounter: number;
  vipOnly: boolean;
  createdAt: number;
  updatedAt: number;
}
