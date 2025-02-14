import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from '../../../components/avatar';
import { ButtonComponent } from '../../../components/button';
import { User, UserType } from '../../../types';
import { DeleteIconComponent } from '../../../icons/delete-icon';
import { Observable, take } from 'rxjs';
import { Store } from '@ngxs/store';
import { UsersState } from '../../../store';

@Component({
  selector: 'app-user-page',
  imports: [CommonModule, ReactiveFormsModule, AvatarComponent, ButtonComponent, DeleteIconComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent implements OnInit {
  protected store = inject(Store)
  protected readonly user$: Observable<any> = this.store.select(UsersState.user);
  private readonly formBuilder = inject(FormBuilder);
  protected userForm = this.formBuilder.group({
    first_name: ['', Validators.required], // Add validators as needed
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });


  ngOnInit(): void {
    this.user$.pipe(take(1)).subscribe(user => {
      if (user) {
        this.userForm.patchValue({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        });
      }
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

  deleteClicked() {

  }
}

