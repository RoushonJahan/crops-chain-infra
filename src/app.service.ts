import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Crops Chain';
  }
  getHealth(): string {
    return 'Service Health Status: Healthy';
  }
}
