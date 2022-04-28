/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import TodoList from './components/TodoList';
import { replaceEl } from './utils';

const initialTodoes = [
  { id: 1, do: 'Позавтракать', completed: false },
  { id: 2, do: 'Помыть посуду', completed: false },
  { id: 3, do: 'Сходить на работу', completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodoes);
  const [text, setText] = useState('');

  const addHandler = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          do: text,
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

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <label>
        <input type="text" value={text} onChange={changeHandler} />
        <button onClick={addHandler} type="button">Add Todo</button>
      </label>
      <TodoList todos={todos} toggleHandler={toggleHandler} />
    </div>
  );
}

export default App;
