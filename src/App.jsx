import { useSelector, useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import AddToDoForm from './components/AddToDoForm';
import { addTodo } from './store/todoSlice';

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const addHandler = (text) => {
    // console.log('add', text);
    dispatch(addTodo(text));
  };

  const toggleHandler = (id) => {
    console.log('toggle', id);
  };

  const deleteHandler = (id) => {
    console.log('delete', id);
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
