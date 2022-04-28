/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function TodoList({ todos, toggleHandler }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.do}
          completed={todo.completed}
          toggle={() => toggleHandler(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
