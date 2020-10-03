import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  declarations: [TodoComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
  ],
})
export class TodoModule {
}
