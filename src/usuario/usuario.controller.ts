import { UsuarioDTO } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';

@Controller('usuario')
export class UsuarioController {
  // private usuarioRepository = new UsuarioRepository();
  constructor(private usuarioService: UsuarioService) {}

  // @Get()
  // findAll(): string {
  //   return 'This action returns all users';
  // }

  @Post()
  async cadastrarUsuario(@Body() dadosDoUsuario: UsuarioDTO) {
    //nesse ponto o dado já foi validado, se não tivesse nem teria entrado no controller

    const novoUsuario = new UsuarioEntity();
    novoUsuario.nome = dadosDoUsuario.nome;
    novoUsuario.email = dadosDoUsuario.email;
    novoUsuario.senha = dadosDoUsuario.senha;
    novoUsuario.id = uuid();
    this.usuarioService.salvar(novoUsuario);
    // return dadosDoUsuario;
    return { id: novoUsuario.id, message: 'usuário criado com sucesso' };
  }

  @Get()
  async retornarUsuarios() {
    return this.usuarioService.retornar();
  }

  @Get(':id')
  async retornarUsuario(@Param() param): Promise<UsuarioDTO[]> {
    console.log(param);
    return this.usuarioService.retornar();
  }

  @Get(':id/pais/:pais')
  async retornarUsuarioComPais(@Param() param): Promise<UsuarioDTO[]> {
    console.log(param);
    return this.usuarioService.retornar();
  }
}
