import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  // constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return 'Hello World';
  }
}
