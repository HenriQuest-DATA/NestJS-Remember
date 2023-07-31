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

  async atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
    const usuario = await this.buscaPorId(id);
    Object.keys(dadosDeAtualizacao).forEach(
      (key) => (this.usuarios[usuario.id][key] = dadosDeAtualizacao[key]),
    );
    return {
      user: { message: 'Usuário atualizado' },
    };
  }

  async deletar(id: string) {
    const user = await this.buscaPorId(id);
    this.usuarios.splice(user.index, 1);
    return {
      message: `Usuário ${user.nome} deletado com sucesso`,
    };
  }

  async buscaPorId(id: string) {
    const index = this.usuarios.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new Error('Usuário não encontrado');
    }

    const user = this.usuarios.find((user) => user.id === id);

    return { index, ...user };
  }
}
