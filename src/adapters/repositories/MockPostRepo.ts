import { Http } from '../infrastuctures';
import IPostRepo from './interfaces/PostRepo';
import PostDto from '../dto/PostDto';
import UpdatePostDto from '../dto/UpdatePostDto';
import { Post } from '../../domain/model';
import replylist from '../../utils/replylist';
import { op } from '../../utils/threadlist';

export default class MockPostRepo implements IPostRepo {
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getPosts(threadId: number): Promise<PostDto[]> {
    return replylist;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getPost(id: number): Promise<PostDto> {
    return op;
  }

  createPost(post: PostDto): Promise<Post> {
    const poststring = JSON.stringify(post);
    return this.client.post<Post>(`https://bakalo.li/api/posts`, { poststring });
  }

  updatePost(id: number, post: UpdatePostDto): Promise<Post> {
    const poststring = JSON.stringify(post);
    return this.client.put<Post>(`https://bakalo.li/api/post/${id}`, { poststring });
  }

  deletePost(id: number): void {
    this.client.delete(`https://bakalo.li/api/posts/${id}`);
  }
}
