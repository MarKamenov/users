import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { UsersListComponent } from '../users-list';
import { User } from '../../../types';
import { Observable } from 'rxjs';
import { LoadUsersList, UsersState } from '../../../store';
import { Store } from '@ngxs/store';
import { PaginationComponent } from '../../../components/pagination';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule, UsersListComponent, PaginationComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent {
  protected store = inject(Store)
  protected readonly usersList$: Observable<User[]> = this.store.select(UsersState.usersList);
  constructor() {
    // Create an effect to watch for pagination changes
    effect(() => {
      this.store.dispatch(new LoadUsersList())
    });
  }
}
