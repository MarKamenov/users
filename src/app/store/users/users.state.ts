import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext, StateToken, Selector } from '@ngxs/store';

import { CreateUser, DeleteUser, LoadUser, LoadUsersList, PatchUser } from './users.actions';
import { UsersModel } from '../../types/store';
import { ListUsersResponse, User, UserListType } from '../../types';
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

  @Action(CreateUser)
  public createUser({ patchState, getState }: StateContext<UsersModel>, { user }: PatchUser): Observable<any> {
    return this.usersService.createUser$(user).pipe(
      tap(() => {
        const state = getState();
        patchState({
          users: {
            ...state.users,
            data: [...state.users.data, user]
          }
        })
      }),
    );
  }

  @Action(PatchUser)
  public patchUser({ patchState, getState }: StateContext<UsersModel>, { user }: PatchUser): Observable<string> {
    return this.usersService.updateUser$(`${user.id}`).pipe(
      tap(() => {
        // This logic updates the state of the edited user. API does now work so it does not updated on the backend side
        const state = getState();
        patchState({
          users: {
            ...state.users,
            data: state.users.data.map(item => {
              if (Number(item.id) === Number(user.id)) {
                return user;
              } else {
                return item
              }
            })
          }
        })
      }),
    );
  }

  @Action(DeleteUser)
  public deleteUser({ patchState, getState }: StateContext<UsersModel>, { id }: DeleteUser): Observable<void> {
    return this.usersService.deleteItem$(id).pipe(
      tap(() => {
        const state = getState();
        patchState({
          users: {
            ...state.users,
            data: state.users.data.filter(user => user.id != +id)
          }
        })
      }),
    )
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
