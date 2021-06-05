import { CreateVipDto, VipDto } from '../../../adapters/dto';

export default interface VipService {
  checkVip(): boolean;
  registerVip(createVipDto: CreateVipDto): Promise<VipDto>;
  loginVip(vipDto: VipDto): Promise<boolean>;
}
