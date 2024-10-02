import { IsPositive, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty() // Es obligatorio de incluir
    @IsString() // Debe tener solo caracteres
    name: string;

    @IsNotEmpty() //Es obligatorio de incluir
    @IsEmail() // Debe tener un formato de email
    email: string;
}
