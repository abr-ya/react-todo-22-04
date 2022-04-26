/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
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
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
