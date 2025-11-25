import { Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '../prisma/generated/client';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
    super({ adapter: pool });    
  }

  async onModuleInit() {
    await this.$connect();
  }
}
