import { PositionStrategy } from '@angular/cdk/overlay';
import { Injectable, InjectionToken, Provider, Type, inject, makeEnvironmentProviders } from '@angular/core';
import { PheadOverlayRef, PheadOverlayService } from '../../../base';
import { QuickAccessComponent } from './quick-access.component';

@Injectable()
export class QuickAccessService {
  private overlay = inject(PheadOverlayService);
  private quickAccessOverlayRef?: PheadOverlayRef;

  toggle(positionStrategy: PositionStrategy, targetElement?: Element) {
    if (this.quickAccessOverlayRef) {
      this.close();
    } else {
      this.open(positionStrategy, targetElement);
    }
  }

  close() {
    if (this.quickAccessOverlayRef) {
      this.quickAccessOverlayRef.close();
    }
  }

  open(positionStrategy: PositionStrategy, targetElement?: Element) {
    if (this.quickAccessOverlayRef) {
      return;
    }
    this.quickAccessOverlayRef = this.overlay.open(
      QuickAccessComponent,
      {
        positionStrategy,
        hasBackdrop: true,
        backdropClass: 'phead-quick-access-backdrop',
        ignorePointerEventsFrom: targetElement ? [targetElement] : undefined,
        height: '100vh',
      }
    )
    this.quickAccessOverlayRef.afterClosed$.subscribe(() => {
      this.quickAccessOverlayRef = undefined;
    })
  }
}

const QUICK_ACCESS_FEATURE = Symbol('quick access feature');
export type QuickAccessWidget = Type<unknown> | (() => Promise<Type<unknown>>);
export const QUICK_ACCESS_WIDGETS = new InjectionToken<QuickAccessWidget[]>('quick access widgets');
export function withWidget(type: QuickAccessWidget): Feature {
  return {
    [QUICK_ACCESS_FEATURE]: QUICK_ACCESS_FEATURE,
    provider: {
      provide: QUICK_ACCESS_WIDGETS,
      useValue: type,
      multi: true,
    }
  }
}

type Feature = {
  [QUICK_ACCESS_FEATURE]: unknown;
  provider: Provider;
}

export function provideQuickAccess(...features: Feature[]) {
  return makeEnvironmentProviders([
    QuickAccessService,
    ...features.map(f => f.provider),
  ])
}