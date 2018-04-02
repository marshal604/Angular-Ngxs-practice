import {MAT_DIALOG_DATA} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Store} from '@ngxs/store';
import {CHANGETODO} from '../todo.state';

@Component({
  selector: 'yur-edit-dialog',
  template: `
    <h3 mat-dialog-title>編輯項目</h3>
    <mat-dialog-content>
      <mat-form-field floatLabel="always">
        <input type="text" matInput placeholder="編輯項目" [value]="note" #editVal>
      </mat-form-field>
      <button mat-button mat-dialog-close color="primary" (click)="save(editVal.value)">完成</button>
      <button mat-button mat-dialog-close color="warn">取消</button>
    </mat-dialog-content>`
})

export class EditDialogComponent {
  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) private data: any) {}
  get note() {
    return this.data.something;
  }

  save(value) {
    const index = this.data.index;
    this.store.dispatch(new CHANGETODO(value, index));
  }
}
