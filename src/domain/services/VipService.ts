import IVipService from './interfaces/VipService';
import { VipRepo } from '../../adapters/repositories/interfaces';
import { CreateVipDto, VipDto } from '../../adapters/dto';

export default class VipService implements IVipService {
  constructor(private readonly vipRepo: VipRepo) {}

  checkVip(): boolean {
    return this.vipRepo.checkVip();
  }

  checkAdmin(): boolean {
    return this.vipRepo.checkAdmin();
  }

  registerVip(createVipDto: CreateVipDto): Promise<VipDto> {
    return this.vipRepo.registerVip(createVipDto);
  }

  loginVip(vipDto: VipDto): Promise<boolean> {
    return this.vipRepo.loginVip(vipDto);
  }
}
