export default class WebStorage implements Storage {
  private storage: Storage;

  length: number;

  constructor(storage: Storage) {
    this.storage = storage;
    this.length = 0;
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this.length += 1;
    return this.storage.setItem(key, value);
  }

  removeItem(key: string): void {
    this.length -= 1;
    return this.storage.removeItem(key);
  }

  clear(): void {
    this.length = 0;
    return this.storage.clear();
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }
}
