interface Post {
  id: string;
  repliedTo: string;
  title?: string;
  mediaUrl?: string;
  author?: string;
  createdAt: string;
  desc: string;
  replyCount: number;
}

export default Post;
