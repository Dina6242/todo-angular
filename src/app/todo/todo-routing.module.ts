import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'create', component: CreateComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {
}
