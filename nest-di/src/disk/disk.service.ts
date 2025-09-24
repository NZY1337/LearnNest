import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): string {
    console.log('Drawing 50W from the power supply');
    this.powerService.supplyPower(50);
    return 'Here is your data from the disk';
  }
}
