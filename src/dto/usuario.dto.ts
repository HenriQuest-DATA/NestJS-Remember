import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailIsUnico } from 'src/usuario/validation/emailUnico.validator';

export class UsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não poder estar vazio' })
  nome: string;

  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty()
  @EmailIsUnico({ message: 'Já existe um usuário com esse email' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'A senha precisa de pelo menos 6 caracteres' })
  senha: string;
}
