import Infrastructures from './interfaces/Infrastructures';
import { AxiosHttp, WebStorage } from '../../adapters/infrastuctures';

export default (): Infrastructures => ({
  http: new AxiosHttp(),
  localStorage: new WebStorage(localStorage),
  sessionStorage: new WebStorage(sessionStorage)
});
