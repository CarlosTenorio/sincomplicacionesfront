import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { CustomCommonModule } from 'app/modules/custom-common/custom-common.module';

import * as Components from './components';

const childRoutes: Route[] = [
  { path: '', component: Components.ListShippingsComponent },
  { path: 'add', component: Components.AddShippingComponent },
  { path: 'detail/:id', component: Components.DetailShippingComponent }
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(childRoutes),
    FormsModule,
    CustomCommonModule
  ],
  declarations: [
    Components.ListShippingsComponent,
    Components.AddShippingComponent,
    Components.DetailShippingComponent
  ]
})
export class ShippingsModule { }
