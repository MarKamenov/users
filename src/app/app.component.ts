import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { COUNTER_STATE_TOKEN, Increment } from './store';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  private readonly store = inject(Store);

  readonly counter = this.store.selectSignal(COUNTER_STATE_TOKEN);

  increment(): void {
    this.store.dispatch(new Increment());
  }
}
