export default interface Post {
  id: number;
  repliedTo: string;
  posterId: string;
  mediaUrl?: string;
  posterName?: string;
  createdAt: Date;
  desc: string;
}
