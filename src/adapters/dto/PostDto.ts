export default class PostDto {
  readonly id: number;

  readonly repliedTo?: string[];

  readonly posterId: string;

  readonly mediaUrl?: string;

  readonly posterName?: string;

  readonly createdAt: number;

  readonly desc: string;
}
