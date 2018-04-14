import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Components from './components';
import * as Pipes from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Components.ValidationMessageComponent,
    Pipes.MapValuesPipe
  ],
  exports: [
    Components.ValidationMessageComponent,
    Pipes.MapValuesPipe
  ]
})
export class CustomCommonModule { }
