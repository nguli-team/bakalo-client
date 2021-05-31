/* eslint-disable camelcase */
import PostDto from './PostDto';

export default class ThreadDto {
  readonly id: number;

  readonly board_id: number;

  readonly title: string;

  readonly sticky: boolean;

  readonly locked: boolean;

  readonly op_id: number;

  op: PostDto;

  readonly poster_count: number;

  readonly reply_count: number;

  readonly media_count: number;

  created_at: number;

  updated_at: number;

  posts?: PostDto[];
}
