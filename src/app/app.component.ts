import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { COUNTER_STATE_TOKEN, Increment } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly store = inject(Store);

  readonly counter = this.store.selectSignal(COUNTER_STATE_TOKEN);

  increment(): void {
    this.store.dispatch(new Increment());
  }
}
