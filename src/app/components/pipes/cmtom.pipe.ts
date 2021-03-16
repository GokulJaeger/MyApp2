import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmtom'
})
export class CmtomPipe implements PipeTransform {

  transform(centimeter:number): number {
    let cmToMeter = 100;
    return centimeter / cmToMeter;
  }

}
