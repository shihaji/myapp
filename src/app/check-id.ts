import { inject, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { EmployeeService } from './employee-service';

@Injectable({
  providedIn: 'root'
})
export class CheckId implements AsyncValidator {

  empService=inject(EmployeeService);
 
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
   
    let id=(control.value);

    return timer(500)
    .pipe(switchMap(()=>this.empService.checkEmpId(id)
    .pipe(map(e=>e.count==0?null:{idExist:true}))))

   
  }


  
  
}
