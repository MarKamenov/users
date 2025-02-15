import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"

import { provideNgxs } from './store';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpTokenInterceptor } from './core/interceptors';

export const appConfig = {
  providers: [provideAnimationsAsync(), provideRouter(appRoutes), provideHttpClient(withFetch(), withInterceptors([httpTokenInterceptor])), provideNgxs()]
};

