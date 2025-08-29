import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptorInterceptor: HttpInterceptorFn = 
(req, next) => {

  console.log('from interceptor ',req.url);

  console.log(localStorage.getItem("Authorization"))

  if(!(req.url.includes('authenticate')||
  req.url.includes('check'))){

   
    req=req.clone({headers:req.headers.set
      ('Authorization',localStorage.getItem("token")??'')})
  }

  return next(req);

  


};
