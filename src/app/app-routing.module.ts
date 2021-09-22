import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { TodolistLayoutComponent } from './shared/layouts/todolist-layout/todolist-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/tasks',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TodolistLayoutComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./views/todolist-views/todolist-views.module').then(m => m.TodolistViewsModule)
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./views/auth-views/auth-views.module').then(m => m.AuthViewsModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
