import { Pipe, PipeTransform } from '@angular/core';
import {element} from "protractor";

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): string {
    let pass: string = value;

    if (activar) {
      pass = value.replace(/[a-z]|[0-9]/gi, '*');
    }

    return pass;
  }

}
