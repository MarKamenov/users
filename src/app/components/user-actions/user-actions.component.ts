import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

import { DeleteIconComponent } from '../../icons/delete-icon';
import { EditIconComponent } from '../../icons/edit-icon';

@Component({
  selector: 'app-user-actions',
  imports: [CommonModule, DeleteIconComponent, EditIconComponent],
  templateUrl: './user-actions.component.html',
  styleUrl: './user-actions.component.scss'
})
export class UserActionsComponent {

  edit = output<void>();
  delete = output<void>();

  editClicked() {
    this.edit.emit();
  }

  deleteClicked() {
    this.delete.emit();
  }

}


