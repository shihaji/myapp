import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  imports: [FormsModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class Delete {

   empService=inject(EmployeeService);

   constructor(public activeRoute:ActivatedRoute){

    let id=this.activeRoute.snapshot.params['id'];

    console.log(id);
    
   }

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
