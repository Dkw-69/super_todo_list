import React, { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext';
import TodosDetail from './TodosDetail';


// list fn
const TodosList = () => {
    // destructure todos and consume context
    const { todos } = useContext(TodosContext)
    // check if we have any todos and map through them if any
    return todos.length ? ( 
        <div className="todos-list">
            <ul>
                {todos.map((todo) => {
                    return(
                       <TodosDetail todo={todo} key={todo.id}/>
                   );
                })}
            </ul>
        </div>
     ):(
        <div className="empty" >There are no todo's yet</div>
     )
}
 
export default TodosList;