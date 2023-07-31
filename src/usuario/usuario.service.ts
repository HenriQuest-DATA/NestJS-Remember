import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }

  async retornar() {
    console.log('retornou');
    return this.usuarios;
  }

  async testEmail(email: string) {
    const userFound = this.usuarios.find((user) => user.email === email);
    return userFound !== undefined;
  }
}
