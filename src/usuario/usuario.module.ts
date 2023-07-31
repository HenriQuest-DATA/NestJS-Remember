import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { EmailUnicoValidator } from './validation/emailUnico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, EmailUnicoValidator],
})
export class UsuarioModule {}
