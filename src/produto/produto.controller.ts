import { Produto } from 'src/dto/produto.dto';
import { ProdutoService } from './produto.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('produto')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Post()
  async cadastrarProduto(@Body() dadosDoProduto: Produto) {
    this.produtoService.salvar(dadosDoProduto);
    return dadosDoProduto;
  }

  @Get()
  async retornarProdutos() {
    return this.produtoService.retornar();
  }
}
