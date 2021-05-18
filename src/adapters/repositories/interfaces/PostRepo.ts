import PostDto from '../../dto/PostDto';
import UpdatePostDto from '../../dto/UpdatePostDto';
import { Post as PostModel } from '../../../domain/model';

export default interface PostRepo {
  getPost(threadId: number): Promise<PostDto[]>;
  createPost(post: PostDto): Promise<PostModel>;
  updatePost(id: number, post: UpdatePostDto): Promise<PostModel>;
  deletePost(id: number): void;
}
