import React from 'react';
import merge from 'lodash/merge';
import { todoConstants, requestTodos, receiveTodos} from '../actions/todo_actions';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodoReducer = (state = defaultState, action) =>{
  switch(action.type){
    case todoConstants.RECEIVE_TODOS:
      debugger
      // let newState = { todos: action.todos };
      return merge({}, state, action.todos);
    case todoConstants.REQUEST_TODOS:
      debugger
      return state;
    default:
      return state;
  }
};

export default TodoReducer;
