import { NgStyle } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'core-linear-progress-display',
  standalone: true,
  imports: [
    NgStyle,
  ],
  templateUrl: './linear-progress-display.component.html',
  host: {
    class: 'core-linear-progress-display'
  }
})
export class LinearProgressDisplayComponent {
  /**
   * From 0 to 100
   */
  @Input({ transform: numberAttribute, required: true }) value!: number;
}
