import { Component, Input, input, model } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet,RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  
  name=model();  // ModelInput signal

}
