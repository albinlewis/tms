import { Task } from './models/task';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatSlideToggleModule, MatSelectModule, MatExpansionModule, MatProgressBarModule, MatCardModule, MatGridListModule, MatStepperModule, MatInputModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatIconModule, MatOptionModule } from '@angular/material';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TaskgridComponent } from './components/taskgrid/taskgrid.component';
import { NotetrackerComponent } from './components/notetracker/notetracker.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api-service';
import { TaskDataService } from './services/task-data-service';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { TaskDetailPipe } from './components/task-detail/task-detail.pipe';
import { DatabaseSelectorComponent, DatabaseDialog } from './components/database-selector/database-selector.component';
import { NoTaskComponent } from './components/notasks/notasks.component';
import { TaskExportComponent } from './components/export/export.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AddtaskComponent,
    AppComponent,
    ProgressbarComponent,
    TaskgridComponent,
    NotetrackerComponent,
    TimerComponent,
    TasksViewComponent,
    TaskDetailComponent,
    TaskDetailPipe,
    TimerComponent,
    DatabaseSelectorComponent,
    DatabaseDialog, 
    NoTaskComponent, 
    TaskExportComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule, 
    MatOptionModule, 
    MatSelectModule,
    MatSlideToggleModule
  ],
  entryComponents: [DatabaseSelectorComponent, DatabaseDialog],
  providers: [ApiService, TaskDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
