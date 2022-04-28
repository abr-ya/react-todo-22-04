import { useState } from 'react';
import TodoList from './components/TodoList';
import { replaceEl } from './utils';

const initialTodoes = [
  { id: 1, title: 'Позавтракать', completed: false },
  { id: 2, title: 'Помыть посуду', completed: false },
  { id: 3, title: 'Сходить на работу', completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodoes);
  const [text, setText] = useState('');

  const addHandler = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          title: text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const toggleHandler = (id) => {
    const newEl = todos.find((el) => el.id === id);
    newEl.completed = !newEl.completed;
    setTodos(replaceEl(todos, 'id', id, newEl));
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <form onSubmit={addHandler}>
        <input type="text" value={text} onChange={changeHandler} />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} toggleHandler={toggleHandler} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
