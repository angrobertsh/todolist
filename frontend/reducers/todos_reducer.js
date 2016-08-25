import React from 'react';
import merge from 'lodash/merge';
import { todoConstants, requestTodos, receiveTodos, createTodo, receiveTodo} from '../actions/todo_actions';

const defaultState = {
  "4": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "5": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodoReducer = (state = defaultState, action) =>{
  switch(action.type){
    case todoConstants.RECEIVE_TODOS:
      return merge({}, state, action.todos);
    case todoConstants.RECEIVE_TODO:
      return merge({}, state, action.todos);
    default:
      return state;
  }
};

export default TodoReducer;
