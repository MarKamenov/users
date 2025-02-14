import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersListComponent } from '../users-list';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule, UsersListComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent {
  users = [
    { id: '1', name: 'John Doe', email: 'john@doe.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@smith.com' },
    { id: '3', name: 'Peter Jones', email: 'peter@jones.com' },
    { id: '4', name: 'Alice Brown', email: 'alice@brown.com' },
    { id: '5', name: 'Bob Davis', email: 'bob@davis.com' },
    { id: '6', name: 'Carol Wilson', email: 'carol@wilson.com' },
  ];
}
