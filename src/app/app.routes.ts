import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Register } from './register/register';
import { Search } from './search/search';
import { Delete } from './delete/delete';
import { loginGuard } from './login-guard';
import { registerGuard } from './register-guard';
import { DynamicRegister } from './dynamic-register/dynamic-register';
import { States } from './states/states';

export const routes: Routes = [

    {path:"",component:Login},
    {path:"home",component:Home,canActivate:[loginGuard],children:[
        {path:"register",canDeactivate:[registerGuard],component:Register},
        {path:"search",component:Search}, 
        {path:"delete",component:Delete}, 
        {path:"dynamicReg",component:DynamicRegister},
        {path:"display",loadComponent:()=>
        import('./display/display').then(result=>result.Display)},
        {path:"states",component:States}
    ]},
    {path:"home/display/delete/:id",component:Delete},
                
   

];
