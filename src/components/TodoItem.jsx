/* eslint-disable react/prop-types */
function TodoItem({ id, title, completed }) {
  const toggleHandler = () => {
    console.log('toggle', id);
  };

  const deleteHandler = () => {
    console.log('delete', id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggleHandler}
      />
      <span>{title}</span>
      <button onClick={deleteHandler} type="button">&times;</button>
    </li>
  );
}

export default TodoItem;
