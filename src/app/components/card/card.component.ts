import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { AvatarComponent } from '../avatar';
import { UserActionsComponent } from '../user-actions';
import { UserDetailsComponent } from '../user-details';
import { User } from '../../types';

@Component({
  selector: 'app-card',
  imports: [AvatarComponent, UserDetailsComponent, UserActionsComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  user = input.required<User>();
  editUser = output<string>()
  deleteUser = output<string>()

  onEdit() {
    this.editUser.emit(`${this.user().id}`)
  }

  onDelete() {
    this.deleteUser.emit(`${this.user().id}`)
  }
}
