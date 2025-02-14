import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"

import { provideNgxs } from './store';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [provideAnimationsAsync(), provideRouter(appRoutes), provideHttpClient(), provideNgxs()]
};

