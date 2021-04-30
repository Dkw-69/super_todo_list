import React, { useContext, useState } from 'react';
import { ADD_TODO } from '../constants/ActionTypes';
import { TodosContext } from '../contexts/TodosContext';


const TodosForm = () => {
    // destructure and consume context
    const { dispatch } = useContext(TodosContext)
    // use usestate hook to get/set title of todo
    const [title, setTitle] = useState('')
    // handle submit fn
    const handleSubmit = (e) => {
        e.preventDefault()
        // use dispatch fn to dispatch an action
        dispatch({type: ADD_TODO, todo: {title}})
        // clear the form
        setTitle('')
    }
    return ( 
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Add todo" onChange={(e) => setTitle(e.target.value)} required />
            <button type="submit" className="btn btn-floating submit-btn">
            <i className="material-icons sub-icon">add</i>
            </button>
        </form>
     );
}
 
export default TodosForm;
