import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthLayoutModule { }
