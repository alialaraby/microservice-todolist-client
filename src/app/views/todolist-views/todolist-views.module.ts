import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistViewsRoutingModule } from './todolist-views-routing.module';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TodolistViewsRoutingModule
  ]
})
export class TodolistViewsModule { }
