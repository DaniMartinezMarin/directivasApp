import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  private _color: string = 'red';
  private _mensajeTexto: string = 'Este campo es obligatorio';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string ) {
    this._color = valor;
    this.setStyle();
  };

  @Input() set mensajeTexto( mensaje: string ) {
    this._mensajeTexto = mensaje;
    this.setText();
  }

  @Input() set invalido( valor: boolean) {
    console.log('Valor ', valor);

    valor ? this.mostrarError():  this.ocultarError()
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {

    this.setText();
    this.setStyle();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setText(): void {
    this.htmlElement.nativeElement.innerText = this._mensajeTexto;
  }

  ocultarError(): void {
    this.htmlElement.nativeElement.classList.add('hidden')
  }

  mostrarError(): void {
    this.htmlElement.nativeElement.classList.remove('hidden')
  }
}
