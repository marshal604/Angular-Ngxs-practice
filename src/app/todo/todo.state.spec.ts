import {async, TestBed} from '@angular/core/testing';
import {TodoState} from './todo.state';
import {NgxsModule, Store} from '@ngxs/store';

describe('Todo state unit test', () => {
  let store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([TodoState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('檢查一開始的todoItem是不是只有"睡到中午"', () => {
    store.selectOnce(state => state.todos.todoData).subscribe(val => {
      expect(val.length).toBe(1);
      expect(val[0].something).toBe('睡到中午');
    });
  });
});
