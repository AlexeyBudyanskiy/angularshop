import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiglightDirective } from './higlight.directive';

@NgModule({
  declarations: [HiglightDirective],
  imports: [
    CommonModule
  ],
  providers: [    ],
  exports: [HiglightDirective]
})
export class SharedModule { }
