import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ArmorSetDataPipe } from '../../../../data-pipes/armor-set-data.pipe';
import { LibraryModule } from '../../../../library/library.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ArmorService } from '../../../../store/armor.service';

@Component({
  selector: 'app-armor-detail',
  standalone: true,
  imports: [
    SharedModule,
    LibraryModule,
    ArmorSetDataPipe,
    RouterLink,
  ],
  templateUrl: './armor-detail.component.html',
  styles: ``
})
export class ArmorDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(ArmorService);
  private id$ = this.route.paramMap.pipe(
    map(params => params.get('armorId')!),
  )
  data$ = this.id$.pipe(
    switchMap((id) => this.service.getOne(id)),
  )

}
