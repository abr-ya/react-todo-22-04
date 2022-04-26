/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.do}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;
