import PropTypes from 'prop-types';

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

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
};

export default TodoItem;
