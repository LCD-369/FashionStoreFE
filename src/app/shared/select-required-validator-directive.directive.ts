import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appSelectValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SelectRequiredValidatorDirectiveDirective,
    multi: true
  }]
})
export class SelectRequiredValidatorDirectiveDirective implements Validator {
  @Input('appSelectValidator') defaultValue: string;
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
  }

}
