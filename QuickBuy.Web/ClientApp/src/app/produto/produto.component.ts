import { Component } from "@angular/core"

@Component({
  selector: "produto",
  template: "<html><body>{{ obterNome() }}</html></body>"
})          

export class ProdutoComponent {

  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";
  }

}
