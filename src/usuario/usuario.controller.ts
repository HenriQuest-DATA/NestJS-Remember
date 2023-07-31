import { criarUsuarioDTO } from 'src/dto/criarUsuario.dto';
import { UsuarioService } from './usuario.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { listaUsuarioDTO } from 'src/dto/listaUsuarios.dto';
import { atualizarUsuarioDTO } from 'src/dto/atualizarUsuario.dto';

@Controller('usuario')
export class UsuarioController {
  // private usuarioRepository = new UsuarioRepository();
  constructor(private usuarioService: UsuarioService) {}

  // @Get()
  // findAll(): string {
  //   return 'This action returns all users';
  // }

  @Post()
  async cadastrarUsuario(@Body() dadosDoUsuario: criarUsuarioDTO) {
    //nesse ponto o dado já foi validado, se não tivesse nem teria entrado no controller

    const novoUsuario = new UsuarioEntity();
    novoUsuario.nome = dadosDoUsuario.nome;
    novoUsuario.email = dadosDoUsuario.email;
    novoUsuario.senha = dadosDoUsuario.senha;
    novoUsuario.id = uuid();
    this.usuarioService.salvar(novoUsuario);
    // return dadosDoUsuario;
    return {
      usuario: new listaUsuarioDTO(novoUsuario.id, novoUsuario.nome),
      message: 'usuário criado com sucesso',
    };
  }

  @Get()
  async retornarUsuarios() {
    const listaUsuarios: listaUsuarioDTO[] = (
      await this.usuarioService.retornar()
    ).map((user) => new listaUsuarioDTO(user.id, user.nome));
    return listaUsuarios;
  }

  @Get(':id')
  async retornarUsuario(@Param() param): Promise<criarUsuarioDTO[]> {
    console.log(param);
    return this.usuarioService.retornar();
  }

  @Get(':id/pais/:pais')
  async retornarUsuarioComPais(@Param() param): Promise<criarUsuarioDTO[]> {
    console.log(param);
    return this.usuarioService.retornar();
  }

  @Put(':id')
  async atualizarUsuario(
    @Param('id') id, //se eu especificar entre parenteses o parâmetro, nem preciso usar param
    @Body() dadosUser: atualizarUsuarioDTO,
  ) {
    console.log(dadosUser);
    console.log('id', id);

    return this.usuarioService.atualizar(id, dadosUser);
  }

  @Delete(':id')
  async deletarUsuario(@Param('id') id) {
    console.log('id', id);

    return this.usuarioService.deletar(id);
  }
}
