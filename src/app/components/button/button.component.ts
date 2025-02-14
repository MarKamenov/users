import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  label = input()
  backgroundColor = input('#007bff')
  textColor = input('#fff');
  onClick = output();

  btnClicked() {
    this.onClick.emit();
  }
}
