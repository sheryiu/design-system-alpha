import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EffectFn } from '@ngneat/effects-ng';
import { EMPTY, catchError, concatMap, tap } from 'rxjs';
import { OverlayRefExtra } from '../../../../components/overlay/overlay-ref-extra';
import { Rank } from '../../../../data/common';
import { LibraryModule } from '../../../../library/library.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ArmorSetService } from '../../../../store/armor-set.service';
import { multilingualFromString } from '../../utils';

@Component({
  selector: 'app-armor-set-create',
  standalone: true,
  imports: [
    SharedModule,
    LibraryModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './armor-set-create.component.html',
})
export class ArmorSetCreateComponent extends EffectFn {
  private service = inject(ArmorSetService);

  private overlayRef = inject(OverlayRefExtra);
  private formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.nonNullable.group({
    name: [null as unknown as string, [Validators.required]],
    rarity: [null as unknown as number, [Validators.required]],
  })

  onSaveClick = this.createEffectFn<void>(args$ => args$.pipe(
    concatMap(() => {
      const value = this.formGroup.getRawValue();
      return this.service.create({
        name: multilingualFromString(value.name),
        rarity: value.rarity,
        rank: value.rarity >= 9 ? 'iceborne' as Rank : 'base' as Rank,
      }).pipe(
        catchError(() => EMPTY),
      );
    }),
    tap(() => this.overlayRef.close()),
  ))
}
