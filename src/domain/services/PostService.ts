import IPostService from './interfaces/PostService';
import { PostRepo } from '../../adapters/repositories/interfaces';
import Post from '../model/Post';
import { CreatePostDto, UpdatePostDto } from '../../adapters/dto';

export default class PostService implements IPostService {
  constructor(private readonly postRepo: PostRepo) {}

  async getPost(threadId: number): Promise<Post[]> {
    return this.postRepo.getPosts(threadId);
  }

  async createPost(post: CreatePostDto): Promise<Post> {
    return this.postRepo.createPost(post);
  }

  async updatePost(id: number, post: UpdatePostDto): Promise<Post> {
    return this.postRepo.updatePost(id, post);
  }

  deletePost(id: number): void {
    this.postRepo.deletePost(id);
  }
}
