import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class TodosModule { }
