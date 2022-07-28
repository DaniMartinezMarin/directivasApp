import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  color: string = 'blue';
  nombre: string = 'Dani'

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  isInvalidField( field: string ): boolean {
    return this.miFormulario.get(field)?.touched &&
          this.miFormulario.get(field)?.invalid || false
  }

  cambiarNombre() {
    this.nombre = Math.random().toString();
  }

  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
