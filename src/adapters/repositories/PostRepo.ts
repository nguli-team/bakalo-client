import { Http } from '../infrastuctures';
import IPostRepo from './interfaces/PostRepo';
import { Post } from '../../domain/model';
import { CreatePostDto, PostDto, UpdatePostDto } from '../dto';

export default class PostRepo implements IPostRepo {
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  async getPosts(threadId: number): Promise<Post[]> {
    const postsDto = await this.client.get<PostDto[]>(`posts?thread_id=${threadId}`);
    return postsDto.map((postDto) => this.mapPostDtoToPost(postDto));
  }

  async getPost(id: number): Promise<Post> {
    const postDto = await this.client.get<PostDto>(`posts/${id}`);
    return this.mapPostDtoToPost(postDto);
  }

  async createPost(post: CreatePostDto): Promise<Post> {
    const formData = new FormData();
    formData.append('board_id', post.thread_id.toString());
    if (post.name) {
      formData.append('name', post.name.toString());
    }
    formData.append('text', post.text.toString());
    formData.append('media', post.media as File);
    const newPostDto = await this.client.post<PostDto>('post', formData, {
      'Content-Type': 'multipart/form-data'
    });
    return this.mapPostDtoToPost(newPostDto);
  }

  async updatePost(id: number, post: UpdatePostDto): Promise<Post> {
    const poststring = JSON.stringify(post);
    const updatedPostDto = await this.client.put<PostDto>(`post/${id}`, {
      poststring
    });
    return this.mapPostDtoToPost(updatedPostDto);
  }

  deletePost(id: number): void {
    this.client.delete(`posts/${id}`);
  }

  private mapPostDtoToPost = (postDto: PostDto): Post => ({
    id: postDto.id,
    refNo: postDto.ref,
    threadId: postDto.thread_id,
    // repliedTo?:
    posterId: postDto.poster_id,
    mediaUrl: `http://localhost:8081/${postDto.media_file_name}`,
    name: postDto.name,
    text: postDto.text,
    createdAt: postDto.created_at,
    updatedAt: postDto.updated_at
  });
}
