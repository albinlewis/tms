import { Component, OnInit } from '@angular/core';
import {Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  ticks = 0;
  resume_ticks: number = 0;
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;
  sub: Subscription;

  ngOnInit() {
  }

  private startTimer() {
      if(!this.sub){
      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;
              
              this.secondsDisplay = this.getSeconds(this.ticks);
              this.minutesDisplay = this.getMinutes(this.ticks);
              this.hoursDisplay = this.getHours(this.ticks);
          }
      );
    }
    else{
      this.resume_ticks = this.ticks;
      this.sub.unsubscribe();
      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t + this.resume_ticks;
              
              this.secondsDisplay = this.getSeconds(this.ticks);
              this.minutesDisplay = this.getMinutes(this.ticks);
              this.hoursDisplay = this.getHours(this.ticks);
          }
      );
    }
  }

  private getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
       return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
      return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) { 
      return digit <= 9 ? '0' + digit : digit;
  }

  private reset() {
    this.ticks = 0; 
    this.resume_ticks = 0;
    this.hoursDisplay = 0;
    this.minutesDisplay = 0;
    this.secondsDisplay = 0;
    this.sub.unsubscribe();
  }

  private pause(){
    this.resume_ticks = this.ticks;
    this.sub.unsubscribe();
  }


}
