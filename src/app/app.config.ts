import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"

import { provideNgxs } from './store';

export const appConfig = {
  providers: [provideAnimationsAsync(), provideExperimentalZonelessChangeDetection(), provideRouter([]), provideNgxs()]
};

