import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestTimerInterceptor } from './requesttimer.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestTimerInterceptor,
    multi: true
  }
];
