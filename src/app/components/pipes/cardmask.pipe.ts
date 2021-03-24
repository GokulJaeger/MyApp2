import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardmask'
})
export class CardmaskPipe implements PipeTransform {

  transform(rcard:number, v:number=4): string {
    let masckedSection = rcard.toString().slice(0,-v);
    let visibleSection = rcard.toString().slice(-v);
    return masckedSection.replace(/./g, '*') + visibleSection;
  }

}
