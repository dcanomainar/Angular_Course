import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
              private validadores: ValidadoresService) { 
    this.createForm();
    this.loadFormData();
  }

  ngOnInit(): void {
  }

  get nameNotValid() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }
  
  get surnameNotValid() {
    return this.form.get('apellido').invalid && this.form.get('apellido').touched;
  }

  get emailNotValid() {
    return this.form.get('correo').invalid && this.form.get('correo').touched;
  }

  get userNotValid() {
    return this.form.get('usuario').invalid && this.form.get('usuario').touched;
  }

  get distritNotValid() {
    return this.form.get('direccion.distrito').invalid && this.form.get('direccion.distrito').touched;
  }

  get cityNotValid() {
    return this.form.get('direccion.ciudad').invalid && this.form.get('direccion.ciudad').touched;
  }

  get pasatiempos() {
    return this.form.get('pasatiempos') as FormArray;
  }

  get pass1NotValid() {
    return this.form.get('pass1').invalid && this.form.get('pass1').touched;
  }

  get pass2NotValid() {
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;
    return (pass1 === pass2) ? false: true;
  }

  createForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.validadores.noHerrera]],
      correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      usuario: ['', , this.validadores.existeUsuario],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([
      ])
    }, {
      Validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  createListeners() {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })

    this.form.statusChanges.subscribe(status => {
      console.log(status);
    })
  }

  loadFormData() {
    this.form.setValue({
      nombre: 'Juanaaaa',
      apellido: 'Perez',
      correo: 'juan@gmail.com',
      usuario: '',
      pass1: '123',
      pass2: '123',
      direccion: {
        distrito: 'Ontario',
        ciudad: 'Canadá'
      },
      pasatiempos: [
      ]
    });
  }

  addPasatiempo() {
    this.pasatiempos.push(this.formBuilder.control('Nuevo elemento', Validators.required));
  }

  deletePasatiempo(i: number) {
  this.pasatiempos.removeAt(i);
  }

  save() {
    if(this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        if(control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        }

        control.markAsTouched();
      });
    }

    this.resetForm();
  }

  resetForm() {
    this.form.reset({
      nombre: 'No Name'
    });
  }
}
