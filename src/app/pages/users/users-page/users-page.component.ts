import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { UsersListComponent } from '../users-list';
import { User } from '../../../types';
import { Observable } from 'rxjs';
import { LoadUsersList, UsersState } from '../../../store';
import { Store } from '@ngxs/store';
import { PaginationComponent } from '../../../components/pagination';
import { ButtonComponent } from '../../../components/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule, ButtonComponent, UsersListComponent, PaginationComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent {
  protected store = inject(Store)
  private readonly router = inject(Router)
  protected readonly usersList$: Observable<User[]> = this.store.select(UsersState.usersList);
  constructor() {
    // Create an effect to watch for pagination changes
    effect(() => {
      this.store.dispatch(new LoadUsersList())
    });
  }

  createUser() {
    this.router.navigate(['/user', '0']);
  }
}
