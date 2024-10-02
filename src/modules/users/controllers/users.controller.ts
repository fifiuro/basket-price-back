import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users') // Grupo Ruta
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.usersService.create(createUserDto);

      return {
        success: true,
        message: 'User Created Successfully'
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  @Get()
  async findAll() {
    try {
      const data = await this.usersService.findAll();

      return {
        success: true,
        data,
        message: 'User Fetched Successfully'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.usersService.findOne(id);

      return {
        success: true,
        data,
        message: 'User Fetched Successfully'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      await this.usersService.update(id, updateUserDto);

      return {
        success: true,
        message: 'User Updated Successfully'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(id);

      return {
        success: true,
        message: 'User Deleted Successfully'
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
