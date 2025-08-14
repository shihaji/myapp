import { CanActivateFn, Router } from '@angular/router';
import { Loginservice } from './loginservice';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {

  let empService=inject(Loginservice);

  let router=inject(Router);

  if(empService.flag){
    return true;
  }else{
    return router.createUrlTree([""]);
  }

  


};
