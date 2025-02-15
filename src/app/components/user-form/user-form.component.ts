import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button';
import { CommonModule } from '@angular/common';
import { Nullable, User } from '../../types';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
  user = input<Nullable<User>>()
  submitForm = output<User>()
  private readonly formBuilder = inject(FormBuilder);
  protected userForm = this.formBuilder.group({
    id: [''],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    avatar: [''],
  });

  ngOnInit(): void {
    const userData = this.user()
    if (userData) {
      this.userForm.patchValue({
        id: `${userData.id}`,
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        avatar: userData.avatar,
      });
    }
  }

  saveUser() {
    if (this.userForm.valid) {
      const formData = this.userForm.getRawValue()
      this.submitForm.emit(formData as unknown as User)
    } else {
      // logic to show errors not handled
      Object.keys(this.userForm.controls).forEach(key => {
        this.userForm.get(key)?.markAsTouched();
      });
    }
  }
}
