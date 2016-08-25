import {connect} from 'react-redux';
import { todoConstants, requestTodos, receiveTodos, createTodo, receiveTodo } from '../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos()),
  receiveTodos: () => dispatch(receiveTodos()),
  receiveTodo: () => dispatch(receiveTodo()),
  createTodo: () => dispatch(createTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
