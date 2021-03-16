import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citofh'
})
export class CitofhPipe implements PipeTransform {

  transform(celcius:number): number {
    let cilToFarh = celcius*1.8000;
    return cilToFarh+32.00;
  }

}
