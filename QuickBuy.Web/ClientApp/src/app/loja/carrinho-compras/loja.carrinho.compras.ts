import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {
    public produtos: Produto[] = [];

    public adicionar(produto: Produto) {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (!produtoLocaStorage) {
            // se nao existir nada dentro do localStorage
            this.produtos.push(produto);            
        } else {
            // se ja existir pelo menos um unico item armazenado na sessao(localLocalStorage)
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos.push(produto);            
        }

        localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    }

    public obterProdutos() : Produto[] {
        var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
        if (produtoLocaStorage)
            return JSON.parse(produtoLocaStorage);
    }

    public removerProduto(produto: Produto) {

    }
}
