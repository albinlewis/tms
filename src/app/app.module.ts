import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatExpansionModule, MatProgressBarModule, MatCardModule, MatGridListModule, MatStepperModule, MatButtonToggleModule} from '@angular/material';
import { TaskComponent } from './components/task/task.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TaskgridComponent } from './components/taskgrid/taskgrid.component';
import { NotetrackerComponent } from './components/notetracker/notetracker.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ProgressbarComponent,
    MenuComponent,
    TaskgridComponent,
    NotetrackerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressBarModule, 
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
