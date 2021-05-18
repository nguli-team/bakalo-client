import IPostService from './interfaces/PostService';
import { Post as PostRepo } from '../../adapters/repositories/interfaces';
import Post from '../model/Post';
import { PostDto, UpdatePostDto } from '../../adapters/dto';

export default class PostService implements IPostService {
  constructor(private readonly postRepo: PostRepo) {}

  async createPost(post: PostDto): Promise<Post> {
    return this.postRepo.createPost(post);
  }

  async updatePost(id: number, post: UpdatePostDto): Promise<Post> {
    return this.postRepo.updatePost(id, post);
  }

  deletePost(id: number): void {
    this.postRepo.deletePost(id);
  }
}
