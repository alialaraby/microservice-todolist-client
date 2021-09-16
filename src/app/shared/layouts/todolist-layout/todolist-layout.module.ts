import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistLayoutComponent } from './todolist-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TodolistLayoutComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TodolistLayoutModule { }
