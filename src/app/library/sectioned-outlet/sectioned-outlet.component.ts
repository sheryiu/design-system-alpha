import { animate, keyframes, query, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'core-sectioned-outlet',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
  ],
  templateUrl: './sectioned-outlet.component.html',
  animations: [
    trigger('routeAnimation', [
      transition('* => *', [
        query(':enter', [
          style({
            display: 'block',
            height: '100%',
            opacity: 0,
            translate: '2rem 0',
          }),
          animate('175ms ease-in-out', style({ opacity: 1, translate: '0 0' })),
        ], { optional: true, }),
        query(':leave', [
          style({
            display: 'block',
            height: '100%',
            opacity: 1,
            translate: '0 0',
          }),
          animate('175ms ease-in-out', style({ opacity: 0, translate: '2rem 0' })),
        ], { optional: true, }),
      ])
    ])
  ]
})
export class SectionedOutletComponent implements AfterViewInit {
  @ViewChild('routerOutletContainer') private routerOutletContainer!: ElementRef<HTMLDivElement>;
  private platformId = inject(PLATFORM_ID);
  private contexts = inject(ChildrenOutletContexts);
  private destroyRef = inject(DestroyRef);

  showingSectionedSlot = false;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const mo = new MutationObserver((entries) => {
        if (entries[0].addedNodes.length > 0) {
          this.showingSectionedSlot = true;
        } else if (entries[0].removedNodes.length > 0) {
          this.showingSectionedSlot = false;
        }
      })
      mo.observe(this.routerOutletContainer.nativeElement, {
        childList: true,
        subtree: false
      })
      this.destroyRef.onDestroy(() => {
        mo.disconnect();
      })
      setTimeout(() => {
        this.showingSectionedSlot = this.routerOutletContainer.nativeElement.childElementCount > 1;
      })
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
