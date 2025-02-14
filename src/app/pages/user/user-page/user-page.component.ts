import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AvatarComponent } from '../../../components/avatar';
import { ButtonComponent } from '../../../components/button';
import { User } from '../../../types';
import { DeleteIconComponent } from '../../../icons/delete-icon';

@Component({
  selector: 'app-user-page',
  imports: [CommonModule, ReactiveFormsModule, AvatarComponent, ButtonComponent, DeleteIconComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent implements OnInit {
  protected userForm!: FormGroup;
  formBuilder = inject(FormBuilder)
  user: User = {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    avatar: '' //  Default avatar URL or path
  };

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
    });
  }

  saveUser() {
    if (this.userForm.valid) {
      // this.isSaving = true;
      setTimeout(() => {
        console.log('Form submitted:', this.userForm.value);
        // this.isSaving = false;
      }, 1000);
    } else {
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key)?.markAsTouched();
      });
    }
  }
}
