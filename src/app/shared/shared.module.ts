import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { SelectRequiredValidatorDirectiveDirective } from './select-required-validator-directive.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { PhoneMaskDirectiveDirective } from './phone-mask-directive.directive';
// import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    SelectRequiredValidatorDirectiveDirective,
    CustomPipePipe,
    PhoneMaskDirectiveDirective
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
    CustomPipePipe,
    PhoneMaskDirectiveDirective
  ],
  entryComponents: [AlertComponent],
  providers: []
})
export class SharedModule {}
