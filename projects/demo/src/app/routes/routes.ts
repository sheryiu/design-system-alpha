import { Routes } from '@angular/router';
import { breadcrumb } from 'phead';

export const ROUTES: Routes = [
  {
    path: 'mhw',
    loadChildren: () => import('./monster-hunter/monster-hunter.routes').then(r => r.ROUTES),
    data: {
      ...breadcrumb({
        title: 'MHW Database'
      })
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.routes').then(r => r.SETTINGS_ROUTES),
    data: {
      ...breadcrumb({
        title: 'Settings'
      })
    }
  }
]