import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoadUser } from '../../store';
import { Nullable } from '../../types';

export const userStateResolver: ResolveFn<Nullable<void>> = (route) => {
  const id = route.params['id']
  return id === '0' ? null : inject(Store).dispatch(new LoadUser(id));
};
