export default interface Post {
  id: number;
  refNo: number;
  threadId: number;
  repliedTo?: number[];
  posterId: string;
  mediaUrl?: string;
  name?: string;
  text: string;
  createdAt: number;
  updatedAt: number;
}
