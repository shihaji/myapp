import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee-service';
import Employee from '../employee';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display {

  empService=inject(EmployeeService);

  empList!:Employee[];

  empList$!:Observable<Employee[]>;

  empList20=httpResource<Employee[]>
  (()=>"http://localhost:5001/listAll");

   

  ngOnInit(){

     

    //this.empService.getAllEmp()
   // .subscribe(result=>this.empList=result);

   this.empList$=this.empService.getAllEmp();
  
  }


}
