
import {Task} from './models/task';
import {TasksViewComponent, AddDialog} from './components/tasks-view/tasks-view.component';
import {TaskDetailComponent} from './components/task-detail/task-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {
  MatSlideToggleModule, MatSelectModule, MatExpansionModule, MatProgressBarModule, MatCardModule,
  MatGridListModule, MatStepperModule, MatInputModule, MatButtonModule, MatTooltipModule, MatDialogModule,
  MatIconModule, MatTableDataSource, MatOptionModule, MatTable, MatTableModule, MatFormFieldModule, MatMenuModule
} from '@angular/material';
import {ProgressbarComponent} from './components/progressbar/progressbar.component';
import {TaskgridComponent} from './components/taskgrid/taskgrid.component';
import {NotetrackerComponent} from './components/notetracker/notetracker.component';
import {TimerComponent} from './components/timer/timer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ApiService} from './services/api-service';
import {TaskDataService} from './services/task-data-service';
import {AddtaskComponent} from './components/addtask/addtask.component';
import {TaskDetailPipe} from './components/task-detail/task-detail.pipe';
import {DatabaseSelectorComponent, DatabaseDialog} from './components/database-selector/database-selector.component';
import {NoTaskComponent} from './components/notasks/notasks.component';
import {TaskExportComponent} from './components/export/export.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ChartsModule} from 'ng2-charts';
import {FilterbarComponent} from './components/filterbar/filterbar.component';
import {PiechartComponent} from './components/statistics/piechart/piechart.component';
import {BarchartComponent} from './components/statistics/barchart/barchart.component';
import {TableComponent} from './components/statistics/table/table.component';
import {StatisticsComponent} from './components/statistics/statistics.component';


@NgModule({
  declarations: [
    AddtaskComponent,
    AppComponent,
    ProgressbarComponent,
    TaskgridComponent,
    NotetrackerComponent,
    AddDialog,
    TimerComponent,
    TasksViewComponent,
    TaskDetailComponent,
    TaskDetailPipe,
    TimerComponent,
    DatabaseSelectorComponent,
    DatabaseDialog,
    NoTaskComponent,
    TaskExportComponent,
    PiechartComponent,
    FilterbarComponent,
    StatisticsComponent,
    BarchartComponent,
    TableComponent
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
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatInputModule,
    MatMenuModule,
    MatStepperModule,
    MatDialogModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatOptionModule,
    ChartsModule
  ],
  entryComponents: [DatabaseSelectorComponent, DatabaseDialog, AddDialog],
  providers: [ApiService, TaskDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
