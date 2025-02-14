import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoadUsersList } from '../../store';

export const usersStateResolver: ResolveFn<void> = () => inject(Store).dispatch(new LoadUsersList());
