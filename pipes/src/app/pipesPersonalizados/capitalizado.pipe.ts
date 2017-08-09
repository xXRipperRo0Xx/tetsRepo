import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalziado'
})
export class capitalizadoPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {

    console.info(value);
    console.info( args );

    value = value.toLowerCase();

    let nombres = value.split(" ");

    for( let i in nombres ){
      nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
    }



    return nombres.join(" ");
  }
}
