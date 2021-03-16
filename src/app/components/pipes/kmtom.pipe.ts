import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kmtom'
})
export class KmtomPipe implements PipeTransform {

    transform(kilometer:number): number {
      let kmToMeter = 1000;
      return kilometer * kmToMeter;
    }

}
