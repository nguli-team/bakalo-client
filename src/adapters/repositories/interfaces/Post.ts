import PostDto from '../../dto/PostDto';
import UpdatePostDto from '../../dto/UpdatePostDto';

export default interface Post {
  getPost(repliedTo: number): Promise<PostDto[]>;
  createPost(post: PostDto): Promise<PostDto>;
  updatePost(id: number, post: UpdatePostDto): Promise<PostDto>;
  deletePost(id: number): Promise<PostDto>;
}
