/* eslint-disable camelcase */
export default class PostDto {
  readonly id: number;

  readonly ref: number;

  readonly thread_id: number;

  readonly poster_id: string;

  readonly media_file_name?: string;

  readonly name?: string;

  readonly text: string;

  readonly created_at: number;

  readonly updated_at: number;
}
