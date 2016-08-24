export const todoConstants = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS"
};

export const requestTodos = () => ({
  type: todoConstants.REQUEST_TODOS,
});

export const receiveTodos = (todos) => ({
  type: todoConstants.RECEIVE_TODOS,
  todos
});
