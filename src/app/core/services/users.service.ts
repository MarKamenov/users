import { HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { SingleUserResponse, ListUsersResponse } from '../../types';
import { ApiBaseService } from './api-base.service';
import { PaginationService } from './pagination.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersUrl = 'users';
  private readonly httpService = inject(ApiBaseService)
  private readonly paginationService = inject(PaginationService);

  public users$ = (): Observable<ListUsersResponse> => {
    let params = new HttpParams()
      .set('page', this.paginationService.currentPage())
      .set('per_page', this.paginationService.itemsPerPage());

    return this.httpService.get<ListUsersResponse>(this.usersUrl, { params }).pipe(
      tap(response => {
        this.paginationService.setTotalPages(
          response.total_pages
        )
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  public getUser$ = (id: string): Observable<unknown> => {
    return this.httpService.get<unknown>(`${this.usersUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        throw error;
      })
    );
  }

  public updateUser$ = (id: string): Observable<string> =>
    this.httpService.patch<string>(`${this.usersUrl}/${id}`);
}

