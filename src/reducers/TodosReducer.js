import { v4 } from 'uuid'
import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from '../constants/ActionTypes'

// reducer fn
export const todosReducer = (todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, {title: action.todo.title, id: v4()}]
        case REMOVE_TODO:
            return todos.filter(todo => todo.id !== action.id)
        default:
            return todos
    }
}