import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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

import { TodoDashboardComponent } from './todo-dashboard.component';

describe('TodoDashboardComponent', () => {
  let component: TodoDashboardComponent;
  let fixture: ComponentFixture<TodoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashboardComponent ],
      imports:  [
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

    fixture = TestBed.createComponent(TodoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
