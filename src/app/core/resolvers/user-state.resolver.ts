import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoadUser } from '../../store';

export const userStateResolver: ResolveFn<void> = (route) => {
  const id = route.params['id']
  return inject(Store).dispatch(new LoadUser(id));
};
