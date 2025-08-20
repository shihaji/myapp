import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Register } from './register/register';
import { Search } from './search/search';
import { Delete } from './delete/delete';
import { Display } from './display/display';
import { loginGuard } from './login-guard';
import { EmployeeService } from './employee-service';
import { registerGuard } from './register-guard';

export const routes: Routes = [

    {path:"",component:Login},
    {path:"home",component:Home,canActivate:[loginGuard],children:[
        {path:"register",canDeactivate:[registerGuard],component:Register},
        {path:"search",component:Search}, // eager loading
        {path:"delete",component:Delete},  
        {path:"display",loadComponent:()=>
        import('./display/display').then(result=>result.Display)}
    ]},
    {path:"home/display/delete/:id",component:Delete},
    {path:"**",redirectTo:""}                
   

];
