import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../../components/card';
import { User } from '../../../types';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  usersData = input.required<User[]>()
}
