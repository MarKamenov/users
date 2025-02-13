import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { COUNTER_STATE_TOKEN, Increment } from './store';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { slideInAnimation } from './animations';
import { UsersListComponent } from './pages/users-list';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, UsersListComponent, RouterOutlet, RouterLinkActive],
  templateUrl: './app.component.html',
  animations: [slideInAnimation]
})
export class AppComponent {
  private readonly store = inject(Store);

  readonly counter = this.store.selectSignal(COUNTER_STATE_TOKEN);

  increment(): void {
    this.store.dispatch(new Increment());
  }
}
