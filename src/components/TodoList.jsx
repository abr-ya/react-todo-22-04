/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function TodoList({ todos, toggleHandler, deleteHandler }) {
  return (
    <ul>
      {todos.map(({ id, title, completed }) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          completed={completed}
          toggle={() => toggleHandler(id)}
          del={() => deleteHandler(id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
