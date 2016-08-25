import React from 'react';
import TodoListItem from './todo_list/todo_list_item';
import TodoListForm from './todo_list/todo_list_form';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestTodos();
  }

  render() {
    // debugger;
    const todoKeys = Object.keys(this.props.todos);

    const todos = todoKeys.map((todoKey, index) =>{
      // return <li key={index}>{ this.props.todos[todoKey].title }</li>;
      return (<TodoListItem todo={this.props.todos[todoKey]} key={todoKey} />);
    });

    return (<ul>{todos}
      <TodoListForm /></ul>);
  }

}

export default TodoList;
