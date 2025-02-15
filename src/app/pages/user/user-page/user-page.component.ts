import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarComponent } from '../../../components/avatar';
import { DeleteIconComponent } from '../../../icons/delete-icon';
import { map, Observable } from 'rxjs';
import { CreateUser, DeleteUser, PatchUser, UsersState } from '../../../store';
import { Nullable, User } from '../../../types';
import { UserFormComponent } from '../../../components/user-form';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-page',
  imports: [CommonModule, RouterLink, ReactiveFormsModule, AvatarComponent, UserFormComponent, DeleteIconComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent {
  protected store = inject(Store)
  protected activateRoute = inject(ActivatedRoute)
  protected readonly user$: Observable<User> = this.store.select(UsersState.user);
  protected readonly isNewUser$: Observable<Nullable<boolean>> = this.activateRoute.paramMap.pipe(
    map(param => param.get('id') === '0')
  );
  private readonly location = inject(Location)

  saveUser(formData: User) {
    if (formData.id) {
      this.store.dispatch(new PatchUser(formData))
    } else {
      this.store.dispatch(new CreateUser(formData))
    }
    this.location.back();

  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.store.dispatch(new DeleteUser(`${id}`))
      this.location.back();
    }
  }

  goToUser() {
    this.location.back();
  }
}

