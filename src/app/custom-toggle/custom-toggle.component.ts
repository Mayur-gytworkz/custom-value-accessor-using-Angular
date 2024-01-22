import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomToggleComponent),
      multi: true,
    },
  ],
})
export class CustomToggleComponent implements ControlValueAccessor {
  @Input() label: string = '';

  private _value: boolean = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value(): boolean {
    return this._value;
  }

  set value(newValue: boolean) {
    if (newValue !== this._value) {
      this._value = newValue;
      this.onChange(newValue);
    }
  }

  toggle() {
    this.value = !this.value;
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // You can implement this if you want to handle disabled state
  }
}
