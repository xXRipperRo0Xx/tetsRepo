import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalziado'
})
export class capitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    // Operador rest . . . para recibir todos los argumentos
    // ...args: any[]
    console.info(value);
    value = value.toLowerCase();

    let nombres = value.split(" ");

    if (todas) {
      for ( let i in nombres ) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }


    return nombres.join(" ");
  }
}
