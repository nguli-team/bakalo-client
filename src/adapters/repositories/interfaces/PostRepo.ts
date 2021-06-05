import { Post } from '../../../domain/model';
import { CreatePostDto, UpdatePostDto } from '../../dto';

export default interface PostRepo {
  getPosts(threadId: number): Promise<Post[]>;
  getPost(id: number): Promise<Post>;
  createPost(post: CreatePostDto): Promise<Post>;
  updatePost(id: number, post: UpdatePostDto): Promise<Post>;
  deletePost(id: number): void;
}
