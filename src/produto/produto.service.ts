import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoService {
  private produtos = [];

  async salvar(produto) {
    this.produtos.push(produto);
    console.log(this.produtos);
  }

  async retornar() {
    console.log('retornou');
    return this.produtos;
  }
}
