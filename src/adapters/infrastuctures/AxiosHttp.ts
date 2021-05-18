import axios, { AxiosStatic } from 'axios';
import { HttpExtraConfig, HttpHeader, Http, HttpRequestBody } from './interfaces/Http';

export default class AxiosHttp implements Required<Http> {
  private readonly client: AxiosStatic;

  constructor() {
    this.client = axios;
  }

  async get<T>(url: string, headers?: HttpHeader, extraConfig?: HttpExtraConfig): Promise<T> {
    const r = await this.client.get(url, { headers, ...extraConfig });
    return r.data as T;
  }

  async post<T>(
    url: string,
    body: HttpRequestBody,
    headers?: HttpHeader,
    extraConfig?: HttpExtraConfig
  ): Promise<T> {
    const res = await this.client.post(url, { headers, data: body, ...extraConfig });
    return res.data as T;
  }

  async put<T>(url: string, header: unknown, body: unknown): Promise<T> {
    return this.client.put(url, { headers: header, data: body }).then((response) => {
      return response.data;
    });
  }

  async delete<T>(url: string, header: unknown): Promise<T> {
    return this.client.delete(url, { headers: header }).then((response) => {
      return response.data;
    });
  }
}
