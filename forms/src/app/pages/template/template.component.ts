import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    nombre: 'aaaaaa',
    apellido: 'aaaaaa',
    correo: 'aaaaaa@aa.es',
    pais: 'ESP',
    genero: 'M'
  }
  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
        .subscribe(paises => {
          this.paises = paises;
          this.paises.unshift({
            nombre: '[Seleccione Pais]', 
            codigo: ''
          })
        });
  }

  save(f: NgForm) {
    if(f.invalid) {
      Object.values(f.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    console.log(f);
  }
}
