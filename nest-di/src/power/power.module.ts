import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // Export the PowerService to be used in other modules
})
export class PowerModule {}
