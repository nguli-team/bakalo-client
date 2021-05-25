export default class CreatePostDto {
  readonly threadId: number;

  readonly media?: File;

  readonly name?: string;

  readonly text: string;
}
