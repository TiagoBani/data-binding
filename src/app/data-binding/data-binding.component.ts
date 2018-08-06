import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: [
    './data-binding.component.css'
  ]
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.com';
  cursoAngular: Boolean = true;
  urlImagem: String = 'http://lorempixel.com/400/200/nature/';
  valorAtual: String = '';
  valorSalvo: String = '';
  isMouseOver: Boolean = false;

  nomeDoCurso: String = 'Angular';

  valorInicial: Number = 15;

  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }
  botaoClicado() {
    alert('Botao clicado');
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
