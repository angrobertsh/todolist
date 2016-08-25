import {todoConstants, requestTodos, receiveTodos, createTodo, receiveTodo} from '../actions/todo_actions';
import {fetchTodos, createTodo } from '../util/todo_api_util';

export const TodoMiddleware = store => next => action => {
  switch(action.type) {
    case "REQUEST_TODOS":
      let success = data => store.dispatch(receiveTodos(data));
      fetchTodos(success);
      break;
    case "CREATE_TODO":
      let success = data => store.dispatch(receiveTodo(data));
      createTodo(success);
      break;
    default:
      next(action);
  }

};
