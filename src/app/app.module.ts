import { TaskComponent } from './components/task/task.component';
import { Task } from './models/task';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { RoutesModule } from './components/routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatExpansionModule, MatProgressBarModule, MatCardModule, MatGridListModule, MatStepperModule, 
        MatInputModule, MatButtonModule } from '@angular/material';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TaskgridComponent } from './components/taskgrid/taskgrid.component';
import { NotetrackerComponent } from './components/notetracker/notetracker.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api-service';
import { TaskDataService } from './services/task-data-service';


@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    MenuComponent,
    TaskgridComponent,
    NotetrackerComponent,
    TimerComponent,
    TasksViewComponent,
    TaskDetailComponent,
    TaskComponent,
    TimerComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [ApiService, TaskDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
