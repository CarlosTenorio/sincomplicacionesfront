import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ApiService,
  AuthenticationService,
  CookiesService
} from './services';
import {
  AddShippingComponent,
  ListShippingsComponent,
  LoginComponent,
  ValidationMessageComponent
} from './components';
import { MapValuesPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    AddShippingComponent,
    ListShippingsComponent,
    LoginComponent,
    ValidationMessageComponent,
    MapValuesPipe
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
    HttpModule
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
