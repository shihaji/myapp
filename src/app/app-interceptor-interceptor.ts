import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptorInterceptor: HttpInterceptorFn = 
(req, next) => {

  console.log('from interceptor ',req.url);

  if(!(req.url.includes('authenticate')||req.url.includes('checkName'))){


    
  }

  return next(req);

  


};
