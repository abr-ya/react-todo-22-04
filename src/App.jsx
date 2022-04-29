import { useSelector, useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import AddToDoForm from './components/AddToDoForm';
import { addTodo, toggleTodo, deleteTodo } from './store/todoSlice';

function App() {
  const todos = useSelector((state) => state.todos); // data for List

  // work with Store
  const dispatch = useDispatch();
  const addHandler = (text) => { dispatch(addTodo(text)); };
  const toggleHandler = (id) => { dispatch(toggleTodo(id)); };
  const deleteHandler = (id) => { dispatch(deleteTodo(id)); };

  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <AddToDoForm addHandler={addHandler} />
      <TodoList todos={todos} toggleHandler={toggleHandler} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
