import {Action, State, StateContext} from '@ngxs/store';

/**** 定義Model ****/
export class TodoItem {
  constructor(public something: string) {
  }
}

/****定義行為****/
export class ADDTODO {
  payload: TodoItem;

  constructor(something: string) {
    this.payload = new TodoItem(something);
  }
}

export class REMOVETODO {
  payload: number;

  constructor(index: number) {
    this.payload = index;
  }
}

export class CHANGETODO {
  payload: {
    index: number;
    something: TodoItem;
  };

  constructor(something: string, index: number) {
    this.payload = {
      index: index,
      something: new TodoItem(something)
    };
  }
}

/**** 定義State ****/
export interface TodoStateModel {
  todoData: TodoItem[];
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todoData: []
  }
})

export class TodoState {

  /**** 定義狀態要怎麼改變 ****/
  @Action(ADDTODO)
  addTodo({getState, setState}: StateContext<TodoStateModel>, {payload}: ADDTODO) {
    const state = getState();
    // 加入一個新的TodoItem
    setState({
      ...state,
      todoData: [...state.todoData, payload]
    });
  }

  @Action(REMOVETODO)
  removeTodo({getState, setState}: StateContext<TodoStateModel>, {payload}: REMOVETODO) {
    const state = getState();
    // 刪除一個TodoItem
    setState({
      ...state,
      todoData: state.todoData.splice(payload, 1)
    });
  }

  @Action(CHANGETODO)
  changeToDo({getState, setState}: StateContext<TodoStateModel>, {payload}: CHANGETODO) {
    const state = getState();
    // 更新一個TodoItem
    setState({
      ...state,
      todoData: state.todoData.splice(payload.index, 1, payload.something)
    });
  }
}
