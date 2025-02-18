import {Pipe, PipeTransform} from '@angular/core';
import {Class} from '../models/class';

@Pipe({
  name: 'classImage'
})
export class ClassImagePipe implements PipeTransform {

  transform(playerClass: Class): string {
    return `assets/classes/${getDofusClassImageIndex(playerClass)}.jpg`
  }

}


function getDofusClassImageIndex(playerClass: Class): number {
  switch (playerClass) {
    case Class.Feca:
      return 1;
    case Class.Osamodas:
      return 2;
    case Class.Enutrof:
      return 3;
    case Class.Sram:
      return 4;
    case Class.Xelor:
      return 5;
    case Class.Ecaflip:
      return 6;
    case Class.Eniripsa:
      return 7;
    case Class.Iop:
      return 8;
    case Class.Cra:
      return 9;
    case Class.Sadida:
      return 10;
    case Class.Sacrieur:
      return 11;
    case Class.Pandawa:
      return 12;
    case Class.Roublard:
      return 13;
    case Class.Zobal:
      return 14;
    case Class.Steamer:
      return 15;
    case Class.Eliotrope:
      return 16;
    case Class.Huppermage:
      return 17;
    case Class.Ouginak:
      return 18;
    case Class.Forgelance:
      return 19;
  }
}
