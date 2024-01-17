import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  header = '';
  body = '';
  type = ''
  oldHeader = '';
  dueDate = new Date();
  modalRef: BsModalRef | undefined;
  addEditSubject = new Subject<any>();
  deleteSubject = new Subject<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onCancel(): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  onSave(): void {
    if (!this.header && !this.body) {
      alert('Header and Message is mandatory');
      return;
    }
    const addEditRow = {
      header: this.header,
      body: this.body,
      dueDate: this.dueDate,
      oldHeader: this.oldHeader
    }
    this.addEditSubject.next(addEditRow);
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  onDelete(): void {
    this.deleteSubject.next(this.header);
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
}
