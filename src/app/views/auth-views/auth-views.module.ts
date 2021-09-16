import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthViewsRoutingModule } from './auth-views-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthViewsRoutingModule
  ]
})
export class AuthViewsModule { }
