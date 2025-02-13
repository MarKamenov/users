import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Nullable } from '../../types';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  avatar = input<Nullable<string>>();
}
