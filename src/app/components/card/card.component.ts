import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
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

  onEdit() {
    // Implement edit logic here (e.g., emit an event to the parent component)
    console.log('Edit clicked');
  }

  onDelete() {
    // Implement delete logic here (e.g., emit an event to the parent component)
    console.log('Delete clicked');
  }
}
