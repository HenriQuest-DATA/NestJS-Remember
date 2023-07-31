import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailIsUnico } from 'src/usuario/validation/emailUnico.validator';

export class atualizarUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não poder estar vazio' })
  @IsOptional()
  nome: string;

  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty()
  @EmailIsUnico({ message: 'Já existe um usuário com esse email' })
  @IsOptional()
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'A senha precisa de pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
