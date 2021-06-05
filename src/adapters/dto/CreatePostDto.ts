/* eslint-disable camelcase */
export default class CreatePostDto {
  readonly thread_id: number;

  readonly media?: File;

  readonly name?: string;

  readonly text: string;

  readonly recaptcha_response?: string;
}
