import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EffectFn } from '@ngneat/effects-ng';
import { exhaustMap, filter, tap } from 'rxjs';
import { ArmorCreateInput, ArmorPosition } from '../../../../../data/armor';
import { LibraryModule } from '../../../../../library/library.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { ArmorService } from '../../../../../store/armor.service';

@Component({
  selector: 'mhw-armor-create',
  standalone: true,
  imports: [
    SharedModule,
    LibraryModule,
  ],
  templateUrl: './armor-create.component.html',
  styles: ``
})
export class ArmorCreateComponent extends EffectFn {
  private service = inject(ArmorService);
  private builder = inject(FormBuilder);
  formControl = this.builder.nonNullable.control<ArmorCreateInput | null>(null);
  armorPosition = Object.values(ArmorPosition);

  expanded = false;

  toggleState() {
    this.expanded = !this.expanded;
  }

  onSubmit = this.createEffectFn<void>(args$ => args$.pipe(
    filter(() => this.formControl.value != null),
    exhaustMap(() =>
      this.service.create(this.formControl.value!)
    ),
    tap(() => this.formControl.reset()),
  ))
}
