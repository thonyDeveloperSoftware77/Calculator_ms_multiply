import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  multiplicar(
    num1: number,
    num2: number,
  ): number {

if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new BadRequestException('Both inputs must be numbers');
    }
    
    return num1 * num2;
  }
  
}
