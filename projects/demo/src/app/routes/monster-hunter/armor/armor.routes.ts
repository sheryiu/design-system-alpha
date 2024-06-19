import { Routes } from '@angular/router';
import { breadcrumb, layeredContainer } from 'portal-ui-ng';
import { map, switchMap } from 'rxjs';
import { ArmorService } from '../../../store/armor.service';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./armor-list/armor-list.component').then(c => c.ArmorListComponent),
    data: {
      ...breadcrumb({
        title: 'Armor'
      }),
      ...layeredContainer('full'),
    },
    children: [
      {
        path: ':armorId',
        loadComponent: () => import('./armor-detail/armor-detail.component').then(c => c.ArmorDetailComponent),
        data: {
          ...breadcrumb({
            deps: [ArmorService] as const,
            titleFn: (route, service) => route.paramMap.pipe(
              map(params => params.get('armorId')!),
              switchMap(id => service.getOne(id)),
              map(d => Object.values(d?.name ?? {}).find(v => v != null) ?? '---'),
            )
          }),
          ...layeredContainer('half'),
        },
        children: [
          {
            path: 'edit',
            loadComponent: () => import('./armor-detail-edit/armor-detail-edit.component').then(c => c.ArmorDetailEditComponent),
            data: {
              ...breadcrumb({
                title: 'Edit'
              }),
              ...layeredContainer('full'),
            }
          },
          {
            path: 'skill',
            data: {
              ...breadcrumb({
                title: 'Skill',
              }),
            },
            loadChildren: () => import('../skill/skill.routes').then(r => r.SKILL_DETAIL_ROUTES),
          },
          {
            path: 'armor-set',
            data: {
              ...breadcrumb({
                title: 'Armor Set',
              }),
            },
            loadChildren: () => import('../armor-set/armor-set.routes').then(r => r.ARMOR_SET_ROUTES),
          }
        ]
      }
    ]
  }
]