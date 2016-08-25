import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store';
import allTodos from './reducers/selector';
import { todoConstants, requestTodos, receiveTodos} from './actions/todo_actions';
import Root from './components/root';

window.store = configureStore;
window.allTodos = allTodos;
window.requestTodos = requestTodos;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("content");
  ReactDOM.render(<Root />, root);

});
