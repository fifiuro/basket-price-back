import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'admin',
      password: 'root',
      entities: ['User'],
      database: 'basket-price',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
