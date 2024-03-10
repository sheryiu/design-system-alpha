import { Routes } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { breadcrumb } from '../../../library/breadcrumbs/breadcrumbs';
import { sectionedOutlet } from '../../../library/sectioned-outlet/sectioned-outlet';
import { ArmorService } from '../../../store/armor.service';
import { SkillService } from '../../../store/skill.service';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./skill-list/skill-list.component').then(c => c.SkillListComponent),
    data: {
      ...breadcrumb({
        title: 'Skill'
      })
    },
    children: [
      {
        path: ':skillId',
        loadComponent: () => import('./skill-detail/skill-detail.component').then(c => c.SkillDetailComponent),
        data: {
          ...breadcrumb({
            deps: [SkillService] as const,
            titleFn: (route, service) => route.paramMap.pipe(
              map(params => params.get('skillId')!),
              switchMap(id => service.getOne(id)),
              map(d => Object.values(d?.name ?? {}).find(v => v != null) ?? '---'),
            )
          }),
          ...sectionedOutlet('half'),
        },
        children: [
          {
            path: 'edit-details',
            loadComponent: () => import('./skill-edit-details/skill-edit-details.component').then(c => c.SkillEditDetailsComponent),
            data: {
              ...breadcrumb({
                title: 'Edit Details'
              }),
              ...sectionedOutlet('full'),
            },
          },
          {
            path: 'level',
            children: [
              {
                path: 'new',
                loadComponent: () => import('./skill-level-create/skill-level-create.component').then(c => c.SkillLevelCreateComponent),
                data: {
                  ...breadcrumb({
                    title: '+ Level'
                  }),
                  ...sectionedOutlet('half'),
                }
              }
            ]
          }
        ]
      }
    ]
  }
]