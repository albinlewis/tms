import { RoutesModule } from './components/routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TasklistitemComponent } from './components/tasklistitem/tasklistitem.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { AddtaskComponent } from './components/addtask/addtask.component';


@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TasklistitemComponent,
    ProgressbarComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
