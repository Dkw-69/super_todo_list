import React, { useContext } from 'react';
import { EDIT_TODO, REMOVE_TODO } from '../constants/ActionTypes';
import { TodosContext } from '../contexts/TodosContext';

// detail fn
const TodosDetail = ({todo}) => {
    // console.log(todo)
    // distructure and consume context
    const { dispatch } = useContext(TodosContext)
    return ( 
        <li>
            <div className="title">
            {todo.title}
            <button className="btn btn-floating red red-darken-4 delete-btn" onClick={() => dispatch({type: REMOVE_TODO, id: todo.id})}>
                <i className="material-icons del-icon">delete</i>
            </button>
            </div>
        </li>
    );
}
 
export default TodosDetail;