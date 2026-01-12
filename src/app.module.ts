import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { AppController } from '../src/app.controller';
// import { ClassroomsModule } from './modules/Classrooms/classrooms.module';

@Module({
  imports: [UsersModule, AuthModule,],
  controllers: [AppController], 
  providers: [PrismaService],
})
export class AppModule {}
