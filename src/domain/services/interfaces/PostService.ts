import { Post } from '../../model';
import { PostDto, UpdatePostDto } from '../../../adapters/dto';

export default interface PostService {
  getPost(threadId: number): Promise<Post[]>;
  createPost(post: PostDto): Promise<Post>;
  updatePost(id: number, post: UpdatePostDto): Promise<Post>;
  deletePost(id: number): void;
}
