import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentModule } from './modules/department/department.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'admin',
      username: 'postgres',
      entities: [],
      database: 'basket-price',
      synchronize: true,
      logging: true,
    }),
    DepartmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
