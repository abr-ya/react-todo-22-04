/* eslint-disable react/prop-types */
function TodoItem({
  id, title, completed, toggle,
}) {
  const deleteHandler = () => {
    console.log('delete', id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggle}
      />
      <span>{title}</span>
      <button onClick={deleteHandler} type="button">&times;</button>
    </li>
  );
}

export default TodoItem;
