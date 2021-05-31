/* eslint-disable camelcase */
export default class CreateThreadDto {
  readonly board_id: number;

  readonly title: string;

  readonly name?: string;

  readonly text: string;

  readonly media: File;

  readonly recaptcha_response?: string;
}
