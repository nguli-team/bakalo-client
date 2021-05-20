export default interface Post {
  id: number;
  repliedTo: number;
  posterId: string;
  mediaUrl?: string;
  posterName?: string;
  createdAt: Date;
  text: string;
}
