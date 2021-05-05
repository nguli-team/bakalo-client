import axios, { Method } from 'axios';

export default class Http {
  client: typeof axios;

  constructor() {
    this.client = axios;
  }

  async request(method: Method, url: string, data?: any): Promise<any> {
    const props = { m: method, u: url, d: data };

    try {
      const res = await this.client({
        method: props.m,
        url: props.u,
        data: props.d
      });
      return res.data;
    } catch (err) {
      return err;
    }
  }
}
