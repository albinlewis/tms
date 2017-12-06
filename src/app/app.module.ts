import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatExpansionModule, MatProgressBarModule, MatCardModule, MatGridListModule, MatStepperModule} from '@angular/material';
import { TaskComponent } from './components/task/task.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TaskgridComponent } from './components/taskgrid/taskgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ProgressbarComponent,
    MenuComponent,
    TaskgridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressBarModule, 
    MatCardModule,
    MatGridListModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
