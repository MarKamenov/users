import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../components/card';
import { User } from '../../types';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  users: User[] = [];

  ngOnInit() {
    // Mock user data (replace with your actual data source)
    this.users = [
      { id: '1', name: 'John Doe', email: 'john@doe.com' },
      { id: '2', name: 'Jane Smith', email: 'jane@smith.com' },
      { id: '3', name: 'Peter Jones', email: 'peter@jones.com' },
      { id: '4', name: 'Alice Brown', email: 'alice@brown.com' },
      { id: '5', name: 'Bob Davis', email: 'bob@davis.com' },
      { id: '6', name: 'Carol Wilson', email: 'carol@wilson.com' },
    ];
  }
}
