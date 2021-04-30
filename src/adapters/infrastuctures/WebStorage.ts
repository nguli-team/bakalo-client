export default class WebStorage {
  private storage: any;

  constructor(storage: any) {
    this.storage = storage;
  }

  get(key: string): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.storage.getItem(key));
    });
  }

  set(key: string, value: any): void {
    this.storage.setItem(key, value);
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }
}
