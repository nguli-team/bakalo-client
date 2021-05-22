import { Http, WebStorage } from '../../../adapters/infrastuctures';

export default interface Infrastructures {
  http: Http;
  localStorage: WebStorage;
  sessionStorage: WebStorage;
}
