import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee-service';
import Employee from '../employee';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display {

  empService=inject(EmployeeService);

  empList!:Employee[];

  ngOnInit(){
    this.empService.getAllEmp()
    .subscribe(result=>this.empList=result);
   }


}
