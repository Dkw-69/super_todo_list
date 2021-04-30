import React from 'react';
import Nav from './components/Nav';
import TodosForm from './components/TodosForm';
import TodosList from './components/TodosList';
import TodosContextProvider from './contexts/TodosContext';

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <Nav/>
        <TodosList/>
        <TodosForm/>
      </TodosContextProvider>
    </div>
  );
}

export default App;
