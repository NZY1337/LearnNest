import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number): string {
    console.log(`Supplying ${watts}W of power`);
    return `Powering up! ${watts}W`;
  }
}
