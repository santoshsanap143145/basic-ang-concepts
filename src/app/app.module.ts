import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { StudentDashboardComponent } from './shared/components/student-dashboard/student-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-dashboard/todo-list/todo-list.component';
import { StudentFormComponent } from './shared/components/student-dashboard/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-dashboard/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    StudentDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
