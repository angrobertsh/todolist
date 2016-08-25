import React from 'react';

class TodoForm extends React.Component {

  constructor (props) {
    super(props);
    this.body = props.body;
    this.title = props.title;
    this.done = props.done;
  }

  componentDidMount() {
    this.props.createTodo();
  }

  render () {
    return ( <div class="todoform">
      <input type="text" name="todoform[title]" placeholder="Title" />
      <input type="text" name="todoform[body]" placeholder="Body" />
      <input type="radio" name="todoform[done]" value={true} />"True"
      <input type="radio" name="todoform[done]" value={false} />"False"
      <button>"Submit"</button>
    </div> );
  }

}


export default TodoForm;
