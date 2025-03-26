import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { StudentDashboardComponent } from './shared/components/student-dashboard/student-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-dashboard/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-dashboard/todo-list/todo-list.component';
import { StudentFormComponent } from './shared/components/student-dashboard/student-form/student-form.component';
import { StudentTableComponent } from './shared/components/student-dashboard/student-table/student-table.component';
import { DialogModalComponent } from './shared/components/dialog-modal/dialog-modal.component';
import { CardComponent } from './shared/components/card/card.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { summaryWordsPipe } from './shared/pipes/summaryWord.pipe';
import { PlayerFilterPipe } from './shared/pipes/playerFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    StudentDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentFormComponent,
    StudentTableComponent,
    DialogModalComponent,
    CardComponent,
    SummaryPipe,
    summaryWordsPipe,
    PlayerFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
