import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    
    let fact=1;
    for(let i=1;i<=value;i++){
      fact*=i;
    }
    return fact+args[0];
  }

}
