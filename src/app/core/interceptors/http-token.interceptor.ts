import { HttpInterceptorFn } from '@angular/common/http';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Get the authentication token from where you store it (e.g., localStorage, sessionStorage, NGXS state)
  const authToken = 'FAKE_BEARER_TOKEN'; //Replace this

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return next(authReq);
};
