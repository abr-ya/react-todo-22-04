/* eslint-disable react/prop-types */
function TodoItem({
  id, title, completed, toggle, del,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={toggle}
        id={`title_${id}`}
      />
      <label htmlFor={`title_${id}`}>{title}</label>
      <button onClick={del} type="button">&times;</button>
    </li>
  );
}

export default TodoItem;
