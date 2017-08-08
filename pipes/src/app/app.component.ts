import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Sergio";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  slice_2 = 5;

  PI = Math.PI;

  //Warning este pipe funciona con la libreria de internacionalizacion
  //Puesto que puede que no entodos los navegadores funcione
  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "spiderman",
    clave: "peter parker",
    edad: 17,
    direccion:{
      calle: "Casa de la tia may",
      casa:"6"
    }

  }

}
