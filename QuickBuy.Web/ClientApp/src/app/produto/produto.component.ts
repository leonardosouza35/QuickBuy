import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/produto";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {    
  public produto: Produto

  constructor() {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }
}
