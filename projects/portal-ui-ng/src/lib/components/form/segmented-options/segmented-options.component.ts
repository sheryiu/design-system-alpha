import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, Output, QueryList, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { nanoid } from 'nanoid';
import { ButtonModule, FilledButtonDirective, HoverableDirective } from '../../../base';
import { OptionDirective } from './option.directive';

@Component({
  selector: 'pui-segmented-options',
  standalone: true,
  imports: [
    HoverableDirective,
    FormsModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
    ButtonModule,
  ],
  host: {
    class: 'pui-segmented-options',
  },
  templateUrl: './segmented-options.component.html',
  styles: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SegmentedOptionsComponent),
      multi: true,
    }
  ]
})
export class SegmentedOptionsComponent<T> implements AfterViewInit, ControlValueAccessor {
  onChange?: (v: T) => void;
  onTouched?: () => void;
  isDisabled?: boolean;

  formControl = inject(FormBuilder).nonNullable.control(null as unknown as T);

  @Input() color: FilledButtonDirective['color'] = 'primary';
  @Input() name: string = nanoid();
  @Input() set value(v: T) {
    this.writeValue(v);
  }
  @Output() valueChange = new EventEmitter<T>();
  @ContentChildren(OptionDirective) options!: QueryList<OptionDirective<T>>;
  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  writeValue(obj: T): void {
    this.formControl.reset(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
    this.isDisabled = isDisabled;
  }

  handleInput() {
    if (this.isDisabled) return;
    this.onChange?.(this.formControl.getRawValue());
    this.valueChange.emit(this.formControl.getRawValue());
  }
}