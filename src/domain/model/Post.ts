export default interface Post {
  id: number;
  refNo: number;
  threadId: number;
  title?: string;
  replies: number[];
  posterId: string;
  mediaUrl?: string;
  mediaFileName?: string;
  name?: string;
  text: string;
  createdAt: number;
  updatedAt: number;
  isYou: boolean;
}
