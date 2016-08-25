export const todoConstants = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
};

export const requestTodos = () => ({
  type: todoConstants.REQUEST_TODOS,
});

export const receiveTodos = (todos) => ({
  type: todoConstants.RECEIVE_TODOS,
  todos
});

export const createTodo = () => ({
  type: todoConstants.CREATE_TODO
});

export const receiveTodo = (todo) => ({
  type: todoConstants.RECEIVE_TODO,
  todo
});
