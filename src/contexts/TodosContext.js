import React, { createContext, useReducer, useEffect } from 'react'
import { todosReducer } from '../reducers/TodosReducer';

// export the context for consuming
export const TodosContext = createContext()

// provider fn
const TodosContextProvider = (props) => {
    // using the usereducer hook
    const [todos, dispatch] = useReducer(todosReducer, [], () => { // third argument is fn that will be taken as default value when loaded
            // load from local storage
            const localData = localStorage.getItem('todos')
            // check if local storage is empty and parse data if not empty. if empty return empty arr.
            return localData ? JSON.parse(localData) : []
        })
    // useeffect hook to save data to local storage and persist on reload
    useEffect(() => {
        // set rhe item
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]) //watch todos
    return ( 
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
     );
}

export default TodosContextProvider;