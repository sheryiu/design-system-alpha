import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { Component, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EffectFn } from '@ngneat/effects-ng';
import { AccordionModule, DividerComponent, LayeredContainerComponent, SidebarModule, TabBarModule, TableModule } from 'phead';
import { map, switchMap } from 'rxjs';
import { Skill } from '../../../../data/skill';
import { SharedModule } from '../../../../shared/shared.module';
import { SkillService } from '../../../../store/skill.service';
import { SkillDrawerInfoComponent } from './skill-drawer-info/skill-drawer-info.component';
import { SkillDrawerLevelCreateComponent } from './skill-drawer-level-create/skill-drawer-level-create.component';
import { SkillDrawerRemoveComponent } from './skill-drawer-remove/skill-drawer-remove.component';

@Component({
  selector: 'app-skill-detail',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink,
    SkillDrawerInfoComponent,
    SkillDrawerLevelCreateComponent,
    SkillDrawerRemoveComponent,
    ScrollingModule,
    LayeredContainerComponent,
    SidebarModule,
    TableModule,
    AccordionModule,
    TabBarModule,
    DividerComponent,
  ],
  templateUrl: './skill-detail.component.html',
  styles: ``
})
export class SkillDetailComponent extends EffectFn {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(SkillService);
  id$ = this.route.paramMap.pipe(
    map(params => params.get('skillId')!),
  )
  data$ = this.id$.pipe(
    switchMap((id) => this.service.getOne(id)),
    map(data => ({
      ...data,
      levels: data?.levels?.toSorted((a, b) => a.level < b.level ? -1 : a.level > b.level ? 1 : 0)
    } as Skill))
  )
  @ViewChild(CdkVirtualScrollViewport) private scrollViewport?: CdkVirtualScrollViewport;

  onHeaderClick() {
    this.router.navigate(['./'], { relativeTo: this.route });
    this.scrollViewport?.scrollToOffset(0, 'smooth');
  }
}