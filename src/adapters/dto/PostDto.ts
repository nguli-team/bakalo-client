export default class PostDto {
  readonly id: number;

  readonly repliedTo: number;

  readonly posterId: string;

  readonly mediaUrl?: string;

  readonly posterName?: string;

  readonly createdAt: number;

  readonly text: string;
}
