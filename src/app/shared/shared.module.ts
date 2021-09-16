import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { TodolistLayoutModule } from './layouts/todolist-layout/todolist-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthLayoutModule,
    TodolistLayoutModule, 
    RouterModule
  ]
})
export class SharedModule { }
