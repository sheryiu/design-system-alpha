import { Component, ContentChild, DestroyRef, Directive, ElementRef, Injector, OnInit, TemplateRef, effect, forwardRef, inject, input, output, signal, untracked, ɵINPUT_SIGNAL_BRAND_WRITE_TYPE } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PheadOverlayRef, PheadOverlayService } from '../../../base';

@Directive({
  selector: '[pheadDropdownTrigger]',
})
export class DropdownTriggerDirective {
  templateRef = inject(TemplateRef);
}

@Directive({
  selector: '[pheadDropdownOverlay]',
})
export class DropdownOverlayDirective {
  templateRef = inject(TemplateRef);
}

@Component({
  selector: 'phead-dropdown',
  templateUrl: './dropdown.component.html',
  styles: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    }
  ]
})
export class DropdownComponent<T> implements ControlValueAccessor, OnInit {
  @ContentChild(DropdownTriggerDirective) trigger?: DropdownTriggerDirective;
  @ContentChild(DropdownOverlayDirective) private dropdownOverlay?: DropdownOverlayDirective;
  private injector = inject(Injector);

  value = input<T | null>(null);
  internalValue$$ = signal<T | null>(null);
  valueChange = output<T | null>();
  disabled$$ = signal<boolean>(false);

  onChange?: (val: T | null) => void;
  onTouched?: () => void;

  ngOnInit(): void {
    effect(() => {
      if (this.value() != null && untracked(() => this.internalValue$$()) == null) {
        this.internalValue$$.set(this.value()!);
      }
    }, { injector: this.injector, allowSignalWrites: true })
  }

  writeValue(obj: T | null): void {
    this.internalValue$$.set(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled$$.set(isDisabled);
  }

  private destroyRef = inject(DestroyRef);
  private elementRef = inject(ElementRef) as ElementRef<HTMLElement>;
  private overlay = inject(PheadOverlayService);
  private overlayRef?: PheadOverlayRef;
  openOverlay(event: MouseEvent) {
    if (this.overlayRef) {
      this.overlayRef.close();
      return;
    }
    if (!this.dropdownOverlay?.templateRef) return;
    this.overlayRef = this.overlay.open(
      this.dropdownOverlay.templateRef,
      {
        positionStrategy: this.overlay.position()
          .flexibleConnectedTo(this.elementRef.nativeElement)
          .withPositions([
            { overlayX: 'start', overlayY: 'top', originX: 'start', originY: 'bottom', offsetY: 8 },
            { overlayX: 'start', overlayY: 'bottom', originX: 'start', originY: 'top', offsetY: -8 },
          ]),
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        width: this.elementRef.nativeElement.getBoundingClientRect().width,
        ignorePointerEventsFrom: [event.currentTarget as Element],
      }
    )
    this.overlayRef.afterClosed$.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => {
      this.overlayRef = undefined;
    })
  }

  selectValue(value: T | null) {
    this.internalValue$$.set(value);
    this.valueChange.emit(value);
    this.onChange?.(this.internalValue$$());
  }
}