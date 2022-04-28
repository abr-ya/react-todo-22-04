import { useState } from 'react';
import TodoList from './components/TodoList';
import AddToDoForm from './components/AddToDoForm';
import { replaceEl } from './utils';

const initialTodoes = [
  { id: '1', title: 'Позавтракать', completed: false },
  { id: '2', title: 'Помыть посуду', completed: false },
  { id: '3', title: 'Сходить на работу', completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodoes);

  const addHandler = (text) => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        title: text,
        completed: false,
      },
    ]);
  };

  const toggleHandler = (id) => {
    const newEl = todos.find((el) => el.id === id);
    newEl.completed = !newEl.completed;
    setTodos(replaceEl(todos, 'id', id, newEl));
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <AddToDoForm addHandler={addHandler} />
      <TodoList todos={todos} toggleHandler={toggleHandler} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
