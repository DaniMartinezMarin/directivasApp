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

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  isInvalidField( field: string ): boolean {
    return this.miFormulario.get(field)?.touched &&
          this.miFormulario.get(field)?.invalid || false
  }

}