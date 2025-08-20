import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  imports: [FormsModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class Delete {

   empService=inject(EmployeeService);

   id:number=0;
   msg:string=""
   delete(){
    
    this.empService.deleteEmp(this.id)
    .subscribe({
      next:data=>this.msg=(data.status),
      error:err=>this.msg=(err.error.status)
    })

   }


}
