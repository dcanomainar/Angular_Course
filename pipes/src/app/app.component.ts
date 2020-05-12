import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'cAPiTan AmeRICA';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  percentage: number = 0.234;
  salary: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;

  videoUrl = 'https://www.youtube.com/embed/PM0HqmptYlY';

  language: string = 'es-ES';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('arrived the data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
}
