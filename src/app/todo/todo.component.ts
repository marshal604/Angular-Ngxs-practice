import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ADDTODO, REMOVETODO, TodoItem} from './todo.state';
import {Observable} from 'rxjs/Observable';
import {MatDialog} from '@angular/material';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';
@Component({
  selector: 'yur-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Select('todos.todoData') todoList: Observable<TodoItem[]>;

  constructor(private store: Store, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  addTodo(item) {
    if (item) {
      this.store.dispatch(new ADDTODO(item.value));
      item.value = '';
    }
  }

  removeTodo(index: number) {
    this.store.dispatch(new REMOVETODO(index));
  }

  openEditDialog(index, something) {
    this.dialog.open(EditDialogComponent, {
      data: {
        index: index,
        something: something
      }
    });
  }
}

