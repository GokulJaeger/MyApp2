import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any): unknown {
    let CurrentYear: any = new Date().getFullYear();
    let UserYear: any = new Date(value).getFullYear();
    let userAge = CurrentYear - UserYear;

    return userAge + " Years";
  }

}
