import { Post } from '../../model';
import { PostDto, UpdatePostDto } from '../../../adapters/dto';

export default interface PostService {
  createPost(post: PostDto): Promise<Post>;
  updatePost(id: number, post: UpdatePostDto): Promise<Post>;
  deletePost(id: number): void;
}
