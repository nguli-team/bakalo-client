import { Http } from '../infrastuctures';
import IPostRepo from './interfaces/PostRepo';
import PostDto from '../dto/PostDto';
import UpdatePostDto from '../dto/UpdatePostDto';
import { Post } from '../../domain/model';

export default class PostRepo implements IPostRepo {
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  getPost(threadId: number): Promise<PostDto[]> {
    return this.client.get<PostDto[]>(`https://bakalo.li/api/posts?threadId=${threadId}`);
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
