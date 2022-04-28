import PropTypes from 'prop-types';
import { useState } from 'react';

function AddToDoForm({ addHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      addHandler(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={text} onChange={changeHandler} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddToDoForm.propTypes = {
  addHandler: PropTypes.func.isRequired,
};

export default AddToDoForm;
