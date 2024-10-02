import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsPositive } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional() // Es obligatorio de incluir
    name: string;

    @IsOptional() //Es obligatorio de incluir
    @IsEmail() // Debe tener un formato de email
    email: string;
}
