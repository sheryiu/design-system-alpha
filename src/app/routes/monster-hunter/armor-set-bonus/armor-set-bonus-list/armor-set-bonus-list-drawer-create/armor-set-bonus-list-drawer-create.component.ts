import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EffectFn } from '@ngneat/effects-ng';
import { EMPTY, catchError, exhaustMap, filter, tap } from 'rxjs';
import { LibraryModule } from '../../../../../library/library.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { ArmorSetBonusCreateInput, ArmorSetBonusService } from '../../../../../store/armor-set-bonus.service';

@Component({
  selector: 'mhw-armor-set-bonus-list-drawer-create',
  standalone: true,
  imports: [
    SharedModule,
    LibraryModule,
  ],
  templateUrl: './armor-set-bonus-list-drawer-create.component.html',
  styles: ``
})
export class ArmorSetBonusListDrawerCreateComponent extends EffectFn {
  private service = inject(ArmorSetBonusService);
  private builder = inject(FormBuilder);
  formControl = this.builder.control<ArmorSetBonusCreateInput | null>(null);

  onSubmit = this.createEffectFn<void>(args$ => args$.pipe(
    filter(() => this.formControl.value != null),
    exhaustMap(() =>
      this.service.create(this.formControl.value!).pipe(
        catchError(() => EMPTY),
      )
    ),
    tap(() => this.formControl.reset()),
  ))

}
