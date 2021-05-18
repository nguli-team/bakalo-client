import { Http } from '../infrastuctures';
import IPost from './interfaces/Post';
import PostDto from '../dto/PostDto';
import UpdatePostDto from '../dto/UpdatePostDto';

export default class Post implements IPost {
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  getPost(threadId: number): Promise<PostDto[]> {
    return this.client.get<PostDto[]>(`https://bakalo.li/api/posts?threadId=${threadId}`);
  }

  createPost(post: PostDto): Promise<PostDto> {
    const poststring = JSON.stringify(post);
    return this.client.post<PostDto>(`https://bakalo.li/api/posts`, { poststring });
  }

  updatePost(id: number, post: UpdatePostDto): Promise<PostDto> {
    const poststring = JSON.stringify(post);
    return this.client.put<PostDto>(`https://bakalo.li/api/post/${id}`, { poststring });
  }

  deletePost(id: number): Promise<PostDto> {
    return this.client.delete<PostDto>(`https://bakalo.li/api/posts/${id}`);
  }
}
