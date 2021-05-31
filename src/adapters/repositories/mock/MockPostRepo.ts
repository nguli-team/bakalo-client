import { Http } from '../../infrastuctures';
import IPostRepo from '../interfaces/PostRepo';
import PostDto from '../../dto/PostDto';
import UpdatePostDto from '../../dto/UpdatePostDto';
import { Post } from '../../../domain/model';
import replylist from '../../../utils/replylist';
import { op } from '../../../utils/threadlist';
import { CreatePostDto } from '../../dto';

export default class MockPostRepo implements IPostRepo {
  readonly client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getPosts(threadId: number): Promise<Post[]> {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTimeout(() => {}, 4000);
    const postsDto = replylist.filter((postDto) => postDto.thread_id === threadId);
    return postsDto.map((postDto) => this.mapPostDtoToPost(postDto));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,class-methods-use-this
  async getPost(id: number): Promise<Post> {
    return this.mapPostDtoToPost(op);
  }

  // eslint-disable-next-line class-methods-use-this
  async createPost(post: CreatePostDto): Promise<Post> {
    const newPost: PostDto = {
      id: 1028930,
      ref: 1028930,
      poster_id: '12312412',
      name: post.name,
      text: post.text,
      thread_id: post.thread_id,
      media_file_name: post.media?.name,
      created_at: 1621863324123,
      updated_at: 1621863324123
    };

    return this.mapPostDtoToPost(newPost);
  }

  updatePost(id: number, post: UpdatePostDto): Promise<Post> {
    const poststring = JSON.stringify(post);
    return this.client.put<Post>(`https://bakalo.li/api/post/${id}`, { poststring });
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
    mediaUrl: postDto.media_file_name,
    name: postDto.name,
    text: postDto.text,
    createdAt: postDto.created_at,
    updatedAt: postDto.updated_at
  });
}
