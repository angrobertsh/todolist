import {todoConstants, requestTodos, receiveTodos} from '../actions/todo_actions';
import {fetchTodos} from '../util/todo_api_util';

export const TodoMiddleware = store => next => action => {
  switch(action.type) {
    case "REQUEST_TODOS":
      const success = data => store.dispatch(receiveTodos(data));
      fetchTodos(success);
      break;
    default:
      next(action);
  }

};
