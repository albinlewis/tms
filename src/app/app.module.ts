import { RoutesModule } from './components/routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatExpansionModule, MatProgressBarModule, MatCardModule, MatGridListModule, MatStepperModule } from '@angular/material';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { TaskgridComponent } from './components/taskgrid/taskgrid.component';
import { NotetrackerComponent } from './components/notetracker/notetracker.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api-service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    MenuComponent,
    TaskgridComponent,
    NotetrackerComponent,
    TimerComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
