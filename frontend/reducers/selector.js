

const allTodos = (state) => {
  let todoArray = [];
  const keys = Object.keys(state.todos);
  todoArray = keys.map((key) => {
    return {key: state.todos[key]};
  });
  return todoArray;
};

export default allTodos;
