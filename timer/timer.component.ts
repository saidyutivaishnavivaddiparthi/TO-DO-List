import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  date = new Date();
  min = 0;
  sec = 0;
  intervalObj: NodeJS.Timer | undefined;
  constructor() { }

  ngOnInit(): void {
    
  }

  onStart(): void {
    if (this.intervalObj) {
      clearInterval(this.intervalObj);
      this.intervalObj = undefined;
    }
    this.intervalObj = setInterval(() => this.pomodoro(), 1000);
  }

  onPause(): void {
    if (this.intervalObj) {
      clearInterval(this.intervalObj);
      this.intervalObj = undefined;
    }
  }

  onTimerStart(min: number, sec: number): void {
    if (this.intervalObj) {
      clearInterval(this.intervalObj);
      this.intervalObj = undefined;
    }

    this.min = min;
    this.sec = sec;
  }
  pomodoro(): void {
    if (this.min === 0 && this.sec === 0) {
      clearInterval(this.intervalObj);
      this.intervalObj = undefined;
    } else if (this.sec === 0 && this.min > 0 ) {
      this.min--;
      this.sec = 59;
    } else if (this.sec === 0) {
      this.sec = 59;
    } else {
      this.sec--;
    }
  }

}
