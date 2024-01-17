import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DndModule } from 'ngx-drag-drop';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent ],
      imports: [
        RouterTestingModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DndModule,
        MatToolbarModule,
        MatSidenavModule,
        DragDropModule,
        ToastrModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start timer', () => {
    jasmine.clock().install();
    component.onTimerStart(5, 0);
    component.onStart();
    jasmine.clock().tick(1500);
    expect(component.min).not.toEqual(0);
    expect(component.sec).not.toEqual(0);
    jasmine.clock().uninstall();
  });

  it('should not have negative min and sec', () => {
    jasmine.clock().install();
    component.onTimerStart(0, 1);
    component.onStart();
    jasmine.clock().tick(1500);

    expect(component.min).toBe(0);
    expect(component.sec).toBe(0);
    jasmine.clock().uninstall();
  });

  it('should verify pomodoro', () => {
   
    component.onTimerStart(0, 1);
    component.min=0;
    component.sec=10;
    component.pomodoro();

    expect(component.min).toBe(0);
    expect(component.sec).toBe(10);

    component.pomodoro();

    expect(component.min).toBe(0);
    expect(component.sec).toBe(8);

    component.min=1;
    component.sec=0;
    component.pomodoro();

    expect(component.min).toBe(0);
    expect(component.sec).toBe(59);
  });
});
