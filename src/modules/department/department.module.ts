import { Module } from '@nestjs/common';
import { DepartmentService } from './services/department.service';
import { DepartmentController } from './controllers/department.controller';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
