/* eslint-disable camelcase */
export default class BoardDto {
  readonly id: number;

  readonly shorthand: string;

  readonly name: string;

  readonly description: string;

  readonly ref_counter: number;

  readonly vip_only: boolean;

  readonly created_at: number;

  readonly updated_at: number;
}
