import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number): number {
    console.log('Drawing 100W from the power supply');

    this.powerService.supplyPower(100);
    return a + b;
  }
}
