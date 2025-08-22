import { Directive, inject } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { Loginservice } from './loginservice';

@Directive({
  selector: '[checkvalid]',
  providers:[{
    provide:NG_ASYNC_VALIDATORS,
    useExisting:Namecheckvalid,
    multi:true
  }]
})
export class Namecheckvalid implements AsyncValidator{

  loginService=inject(Loginservice);

  constructor() { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
   
    return timer(500)
    .pipe(switchMap(()=>
      this.loginService.checkName(control.value)
    .pipe(map((e:{count:number})=>e.count?null:{noName:true}))))
  

  }


}
