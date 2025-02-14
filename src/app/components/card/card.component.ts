import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { AvatarComponent } from '../avatar';
import { UserActionsComponent } from '../user-actions';
import { UserDetailsComponent } from '../user-details';
import { User } from '../../types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [AvatarComponent, UserDetailsComponent, UserActionsComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  user = input.required<User>();
  private readonly router = inject(Router)

  onEdit() {
    this.router.navigate([`/users/user:${this.user().id}`]);
  }

  onDelete() {
    console.log('Delete clicked');
  }
}
