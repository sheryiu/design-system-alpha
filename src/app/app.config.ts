import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTransloco } from '@ngneat/transloco';
import { routes } from './app.routes';
import { provideTheme } from './components/services/theme.service';
import { TranslocoHttpLoader } from './core/transloco-http-loader';
import { provideMultilingual } from './library/multilingual-text-edit/multilingual-text-edit.component';
import { provideRootNavigation } from './library/root-navigation/root-navigation';

export const appConfig: ApplicationConfig = {
  providers: [
    provideTheme(),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(
      routes,
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideClientHydration(),
    provideMultilingual(['jp', 'en', 'zh']),
    provideTransloco({
      config: {
        availableLangs: ['en', 'jp', 'zh'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    provideRootNavigation([
      {
        icon: 'apparel',
        label: 'MHW',
        routerLink: ['mhw'],
        children: [
          {
            type: 'route',
            icon: 'calculate',
            label: 'Armor Simulator',
            routerLink: ['mhw', 'armor-sim'],
          },
          {
            type: 'divider'
          },
          {
            type: 'route',
            label: 'Armor Pieces',
            routerLink: ['mhw', 'armor'],
          },
          {
            type: 'route',
            label: 'Armor Sets',
            routerLink: ['mhw', 'armor-set'],
          },
          {
            type: 'route',
            label: 'Charms',
            routerLink: ['mhw', 'charms'],
          },
          {
            type: 'divider'
          },
          {
            type: 'route',
            label: 'Monsters',
            routerLink: ['mhw', 'monster'],
          },
          {
            type: 'route',
            label: 'Materials',
            routerLink: ['mhw', 'material'],
          },
          {
            type: 'route',
            label: 'Skills',
            routerLink: ['mhw', 'skill'],
          },
        ]
      },
      {
        icon: 'user_attributes',
        label: 'Others',
        routerLink: ['skills']
      },
    ])
  ],
};
