import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../modelo/produto";

@Component({
  selector: "loja-app-produto",
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})
export class LojaProdutoComponent implements OnInit {
    public produto: Produto;
  
    ngOnInit(): void {
      var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
      if (produtoDetalhe) {
        this.produto = JSON.parse(produtoDetalhe);
      }
    }

  constructor(private produtoServico: ProdutoServico) {

  }

}
