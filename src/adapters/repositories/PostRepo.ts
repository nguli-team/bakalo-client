import { Http } from '../infrastuctures';
import IPostRepo from './interfaces/PostRepo';
import PostDto from '../dto/PostDto';
import UpdatePostDto from '../dto/UpdatePostDto';
import { Post } from '../../domain/model';
import { CreatePostDto } from '../dto';

export default class PostRepo implements IPostRepo {
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  async getPosts(threadId: number): Promise<Post[]> {
    const postsDto = await this.client.get<PostDto[]>(
      `https://bakalo.li/api/posts?threadId=${threadId}`
    );
    return postsDto.map((postDto) => this.mapPostDtoToPost(postDto));
  }

  async getPost(id: number): Promise<Post> {
    const postDto = await this.client.get<PostDto>(`https://bakalo.li/api/posts/${id}`);
    return this.mapPostDtoToPost(postDto);
  }

  async createPost(post: CreatePostDto): Promise<Post> {
    const poststring = JSON.stringify(post);
    const newPostDto = await this.client.post<PostDto>(`https://bakalo.li/api/posts`, {
      poststring
    });
    return this.mapPostDtoToPost(newPostDto);
  }

  async updatePost(id: number, post: UpdatePostDto): Promise<Post> {
    const poststring = JSON.stringify(post);
    const updatedPostDto = await this.client.put<PostDto>(`https://bakalo.li/api/post/${id}`, {
      poststring
    });
    return this.mapPostDtoToPost(updatedPostDto);
  }

  deletePost(id: number): void {
    this.client.delete(`https://bakalo.li/api/posts/${id}`);
  }

  private mapPostDtoToPost = (postDto: PostDto): Post => ({
    id: postDto.id,
    refNo: postDto.ref,
    threadId: postDto.thread_id,
    // repliedTo?:
    posterId: postDto.poster_id,
    mediaUrl: postDto.media_url,
    name: postDto.name,
    text: postDto.text,
    createdAt: postDto.created_at,
    updatedAt: postDto.updated_at
  });
}
