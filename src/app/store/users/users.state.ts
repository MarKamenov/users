import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext, StateToken, Selector } from '@ngxs/store';

import { LoadUser, LoadUsersList } from './users.actions';
import { UsersModel } from '../../types/store';
import { ListUsersResponse, SingleUserResponse, User, UserListType, UserType } from '../../types';
import { catchError, Observable, tap } from 'rxjs';
import { UsersService } from '../../core/services';

export const USERS_STATE_TOKEN = new StateToken<UsersModel>('users');

@State<UsersModel>({
  name: USERS_STATE_TOKEN,
  defaults: {
    users: {} as UserListType,
    user: {} as User
  }
})
@Injectable()
export class UsersState {
  private readonly usersService = inject(UsersService)

  @Action(LoadUsersList)
  public loadUsersList({
    patchState,
  }: StateContext<UsersModel>): Observable<UserListType> {
    return this.usersService.users$().pipe(
      tap((result: ListUsersResponse) => {
        const { support, ...rest } = result
        patchState({ users: rest })
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  @Action(LoadUser)
  public loadUser({ patchState }: StateContext<UsersModel>, { id }: LoadUser): Observable<User> {
    return this.usersService.getUser$(id).pipe(
      tap((result: any) => {
        const { data } = result
        patchState({ user: data })
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  @Selector()
  static usersList({ users: { data } }: UsersModel): User[] {
    return data;
  }

  @Selector()
  static user({ user }: UsersModel): User {
    return user;
  }
}
