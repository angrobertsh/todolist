import React from "react";
import { createStore } from "redux";
import RootReducer from "../reducers/root_reducer";
import { todoConstants, requestTodos, receiveTodos} from '../actions/todo_actions';
import { applyMiddleware } from "redux";
import { TodoMiddleware } from "../middleware/todo_middleware";
import  createLogger from "redux-logger";


const MasterMiddleware = applyMiddleware(TodoMiddleware, createLogger());

const configureStore = createStore(RootReducer, MasterMiddleware);


export default configureStore;
//export default MasterMiddleware;
