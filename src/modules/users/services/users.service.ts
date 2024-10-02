import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Crear un usuario
   * @param createUserDto 
   * @returns 
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userData = await this.userRepository.create(createUserDto);
    return this.userRepository.save(userData);
  }

  /**
   * Devolvemos todos los usuarios
   * @returns 
   */
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /**
   * Devolvemos un usuario dado en id
   * @param id 
   * @returns 
   */
  async findOne(id: string): Promise<User> {
    const userData = await this.userRepository.findOneBy({ id });
    if(!userData){
      throw new HttpException('User Not Found', 404);
    }
    return userData;
  }

  /**
   * Actualizamos un usuario
   * @param id 
   * @param updateUserDto 
   * @returns 
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.findOne(id);
    const userData = this.userRepository.merge(existingUser, updateUserDto);
    return await this.userRepository.save(userData);
  }

  async remove(id: string): Promise<User> {
    const existingUser = await this.findOne(id);
    return await this.userRepository.remove(existingUser);
  }
}
