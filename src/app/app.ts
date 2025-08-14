import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  title="Botree Software Solutions!!"

  flag=true;
  name="guest";
  name2=""

  emp={id:100,name:"abc"};

  changeName(){

    this.emp.name=this.name2;
  }
  

}
