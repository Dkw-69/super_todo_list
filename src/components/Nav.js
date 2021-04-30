import React, { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContext';


const Nav = () => {
    // destructure todos(consuming todos context)
    const { todos } = useContext(TodosContext)
    return ( 
        <div className="nav">
            <h3>Your Super Todo's List!</h3>
            <p>You have <span className="len-span">{todos.length}</span> todo(s) at the moment...</p>
        </div>
     );
}
 
export default Nav;
