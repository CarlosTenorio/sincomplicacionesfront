import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'shippings',
    loadChildren: 'app/modules/shippings/shippings.module#ShippingsModule',
    data: { title: 'shippings' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
