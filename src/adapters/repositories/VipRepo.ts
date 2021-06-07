import IVipRepo from './interfaces/VipRepo';
import { Http, WebStorage } from '../infrastuctures';
import { CreateVipDto, VipDto } from '../dto';

export default class VipRepo implements IVipRepo {
  private readonly isValidKey = 'is_valid';

  private readonly isAdminKey = 'is_admin';

  constructor(private readonly client: Http, private readonly localStorage: WebStorage) {}

  checkVip(): boolean {
    return !!this.localStorage.getItem<boolean>(this.isValidKey);
  }

  checkAdmin(): boolean {
    return !!this.localStorage.getItem<boolean>(this.isAdminKey);
  }

  registerVip(createVipDto: CreateVipDto): Promise<VipDto> {
    return this.client.post<VipDto>('vip', createVipDto);
  }

  async loginVip(vipDto: VipDto): Promise<boolean> {
    const res = await this.client.post<any>('vip/login', vipDto);
    this.localStorage.setItem(this.isValidKey, res.is_valid);
    this.localStorage.setItem(this.isAdminKey, res.is_admin);
    return true;
  }
}
