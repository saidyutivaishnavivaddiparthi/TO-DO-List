import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';
import { AddToDoComponent } from '../add-to-do/add-to-do.component';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

  title = 'todo';
  bsModalRef: BsModalRef | undefined;

  todaysDate = new Date();
  toDoList = [
    {
      header: 'Pay Electricity Bill',
      body: `Pay electricity bill by ${(new Date()).getDate()} Oct.`,
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDate() + 1)
    },
    {
      header: 'Collect book from library',
      body: 'GET RDBMS book from library on 30 Oct.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDate() + 3)
    }
  ];

  progressList = [
    {
      header: 'Write a Program',
      body: 'Write string manipulation program in Python language.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDate())
    }
  ];

  doneList = [
    {
      header: 'Submit Assignment',
      body: 'Submit SPA assignment before due date.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDate() - 3)
    },
    {
      header: 'Celebrate Diwali',
      body: 'Celebrate Diwali festival with family and friends.',
      dueDate: new Date(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDate() - 2)
    }
  ];
  

  constructor(
    private modalService: BsModalService,
    private toastr: ToastrService
    ) {
    
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.showActionalMessage();
    }, 1000);
  }

  showActionalMessage(): void {
    const date = new Date();
    const todaysStartDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
    const todaysEndDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 23, 59, 59, 0)
    const actionaToDo = this.toDoList.filter(todoObj => todoObj.dueDate.getTime() > todaysStartDate.getTime() && todoObj.dueDate.getTime() < todaysEndDate.getTime());
    if (actionaToDo.length > 0) {
      actionaToDo.forEach(todoObj => {
        this.showToasterMessage(todoObj.body, todoObj.header);
      });
    }
  }

  showAddToDo() {
    const initialState = {
      header: '',
      body: '',
      type: 'add'
    };
    this.bsModalRef = this.modalService.show(AddToDoComponent, {initialState});
    this.bsModalRef.content.modalRef = this.bsModalRef;
    this.bsModalRef.content.addEditSubject.subscribe((result: any) => {
      this.toDoList.push(result);
    });
  }

  showEditToDo(param: any) {
    const initialState = {
      header: param.header,
      body: param.body,
      type: 'edit',
      oldHeader: param.header
    };
    this.bsModalRef = this.modalService.show(AddToDoComponent, {initialState});
    this.bsModalRef.content.modalRef = this.bsModalRef;
    this.bsModalRef.content.addEditSubject.subscribe((result: any) => {
      const selectedObj = this.toDoList.filter(obj => obj.header === result.oldHeader);
      if (selectedObj.length > 0) {
        selectedObj[0].header = result.header;
        selectedObj[0].body = result.body;
      }
    });
    this.bsModalRef.content.deleteSubject.subscribe((header: string) => {
      let objIndex;
      this.toDoList.forEach((obj, index) => {
        if (obj.header === header) {
          objIndex = index;
        }
      });
      if (objIndex) {
        this.toDoList.splice(objIndex, 1);
      }
    });
  }

  onDraggableMoved(param: any): void {
    console.log(param);
  }

  drop(event: CdkDragDrop<any>) :void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  showToasterMessage(header: string, body: string) {
    this.toastr.error(header, body, {
      timeOut: 10000,
      closeButton: true,
      progressBar: true
    });
  }

}
