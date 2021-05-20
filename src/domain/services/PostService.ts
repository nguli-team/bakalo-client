import IPostService from './interfaces/PostService';
import { PostRepo } from '../../adapters/repositories/interfaces';
import Post from '../model/Post';
import { PostDto, UpdatePostDto } from '../../adapters/dto';

export default class PostService implements IPostService {
  constructor(private readonly postRepo: PostRepo) {}

  async getPost(threadId: number): Promise<Post[]> {
    const postsDto = await this.postRepo.getPosts(threadId);

    return postsDto.map((post) => ({
      id: post.id,
      repliedTo: post.repliedTo,
      mediaUrl: post.mediaUrl,
      posterId: post.posterId,
      posterName: post.posterName,
      text: post.text,
      createdAt: new Date(post.createdAt)
    }));
  }

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
