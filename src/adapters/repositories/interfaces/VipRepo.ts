import { CreateVipDto, VipDto } from '../../dto';

export default interface VipRepo {
  registerVip(createVipDto: CreateVipDto): Promise<VipDto>;
  loginVip(vipDto: VipDto): Promise<boolean>;
  checkVip(): boolean;
  checkAdmin(): boolean;
}
