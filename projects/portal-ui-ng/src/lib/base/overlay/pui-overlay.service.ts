import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type, ViewContainerRef, inject } from '@angular/core';
import { OVERLAY_CONTENT, OVERLAY_DATA } from './overlay';
import { OverlayContainerComponent } from './overlay-container/overlay-container.component';
import { PuiOverlayRef } from './pui-overlay-ref';

@Injectable()
export class PuiOverlayService {

  private overlay = inject(Overlay);

  position = () => this.overlay.position();
  scrollStrategies = this.overlay.scrollStrategies;

  open<T, D>(
    component: Type<T> | TemplateRef<unknown>,
    config: OverlayConfig & {
      parentInjector?: Injector | undefined,
      viewContainerRef?: ViewContainerRef | null | undefined,
      data?: D,
      closeOnBackdropClick?: boolean,
      ignorePointerEventsFrom?: Element | Element[],
    }
  ) {
    const overlayRef = this.overlay.create({
      ...config,
    });
    const overlayRefExtra = new PuiOverlayRef(overlayRef, config.ignorePointerEventsFrom);
    const injector = Injector.create({
      providers: [
        {
          provide: OVERLAY_DATA,
          useValue: config.data,
        },
        {
          provide: OVERLAY_CONTENT,
          useValue: component,
        },
        {
          provide: PuiOverlayRef,
          useValue: overlayRefExtra,
        },
      ],
      parent: config.parentInjector
    })
    const portal = new ComponentPortal(OverlayContainerComponent, config.viewContainerRef, injector);
    portal.attach(overlayRef);
    overlayRefExtra.afterOpened$.next();
    if (config.hasBackdrop && config.closeOnBackdropClick) {
      overlayRefExtra.closeOnBackdropClick();
    }
    return overlayRefExtra;
  }
}