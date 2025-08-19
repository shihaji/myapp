import { CanDeactivateFn } from '@angular/router';
import { Register } from './register/register';

export const registerGuard: CanDeactivateFn<Register> =
 (component:Register, currentRoute, currentState, nextState) => {

  return component.saveData();  

  


};
