import { combineReducers } from 'redux'
import todosReducer from './todoReducer'

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;