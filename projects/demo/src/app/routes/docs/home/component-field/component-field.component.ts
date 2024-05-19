import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InputFieldComponent } from 'phead';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'demo-component-field',
  standalone: true,
  imports: [
    SharedModule,
    InputFieldComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './component-field.component.html',
  styles: ``
})
export class ComponentFieldComponent {

}