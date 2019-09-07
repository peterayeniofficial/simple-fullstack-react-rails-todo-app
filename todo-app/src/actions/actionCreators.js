import { 
    LOAD_TODOS, 
    ADD_TODO, 
    TOGGLE_TODO, 
    DELETE_TODO 
} from './actionTypes'

export function loadTodos(todos) {
    return {
        type: LOAD_TODOS,
        todos

    }
}

export function addTodo(id, title) {
    return {
        type: ADD_TODO,
        id,
        title
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}


