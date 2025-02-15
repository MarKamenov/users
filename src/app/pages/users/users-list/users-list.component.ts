import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../../components/card';
import { Nullable, User } from '../../../types';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { DeleteUser } from '../../../store';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  usersData = input.required<Nullable<User[]>>()
  private readonly router = inject(Router)
  protected store = inject(Store)


  editUser(userId: string) {
    this.router.navigate(['/user', userId]);
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(new DeleteUser(`${userId}`))
    }
  }

}
