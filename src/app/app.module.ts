import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCommonModule } from './modules/custom-common/custom-common.module';
import {
  ApiService,
  AuthenticationService,
  CookiesService
} from './services';
import * as Components from './components';

@NgModule({
  declarations: [
    AppComponent,
    Components.LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    AppRoutingModule,
    CustomCommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AuthenticationService,
    CookiesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
