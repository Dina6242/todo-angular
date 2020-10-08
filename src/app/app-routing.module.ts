import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/Guards/login.guard';
import { UnloginGuard } from './core/Guards/unlogin-guard.service';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [UnloginGuard]},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [LoginGuard]},
  {path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule), canActivate: [UnloginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
