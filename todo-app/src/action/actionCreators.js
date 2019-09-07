import { 
    LOAD_TODOS, 
    ADD_TODO, 
    TOGGLE_TODO, 
    DELETE_TODO 
} from '../actions/actionTypes'

export function LOAD_TODOS(todos) {
    return {
        type: LOAD_TODOS,
        todos

    }
}

export function ADD_TODO(id, title) {
    return {
        type: ADD_TODO,
        id,
        title
    }
}

export function TOGGLE_TODO(index) {
    return {
        type: TOGGLE_TODO,
        index 
    }
}

export function DELETE_TODO(index) {
    return {
        type: DELETE_TODO,
        index
    }
}


