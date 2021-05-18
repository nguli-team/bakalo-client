import { Http } from '../../../adapters/infrastuctures';

export default interface Infrastructures {
  http: Http;
  localStorage: Storage;
  sessionStorage: Storage;
}
