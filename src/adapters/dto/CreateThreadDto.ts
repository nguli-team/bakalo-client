export default class CreateThreadDto {
  readonly title: string;

  readonly boardId: number;

  readonly posterName?: string;

  readonly text: string;

  readonly media?: File;
}
