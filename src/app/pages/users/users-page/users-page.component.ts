import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersListComponent } from '../users-list';
import { User } from '../../../types';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent {
  users: User[] = [
    { id: 1, first_name: 'John', last_name: 'Doe', email: 'john@doe.com' },
    { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane@smith.com' },
    { id: 3, first_name: 'Peter', last_name: 'Jones', email: 'peter@jones.com' },
    { id: 4, first_name: 'Alice', last_name: 'Brown', email: 'alice@brown.com' },
    { id: 5, first_name: 'Bob', last_name: 'Davis', email: 'bob@davis.com' },
    { id: 6, first_name: 'Carol', last_name: 'Wilson', email: 'carol@wilson.com' },
  ];
}
