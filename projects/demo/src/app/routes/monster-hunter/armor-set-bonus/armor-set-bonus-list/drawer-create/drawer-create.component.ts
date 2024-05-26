import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EffectFn } from '@ngneat/effects-ng';
import { AccordionModule, FieldModule, SidebarModule } from 'portal-ui-ng';
import { EMPTY, catchError, exhaustMap, filter, tap } from 'rxjs';
import { SharedModule } from '../../../../../shared/shared.module';
import { ArmorSetBonusCreateInput, ArmorSetBonusService } from '../../../../../store/armor-set-bonus.service';

@Component({
  selector: 'mhw-drawer-create',
  standalone: true,
  imports: [
    SharedModule,
    FieldModule,
    AccordionModule,
    SidebarModule,
  ],
  templateUrl: './drawer-create.component.html',
  styles: ``
})
export class DrawerCreateComponent extends EffectFn {
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
