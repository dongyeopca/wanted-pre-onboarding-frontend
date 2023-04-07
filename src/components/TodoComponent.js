import React, { useState } from 'react';

function TodoComponent(props) {
  console.log(props);
  const { id, userId, isCompleted, todo, deleteHandler, updateHandler } = props;
  const [checkboxState, setCheckboxState] = useState(isCompleted);
  const [text, setText] = useState(todo);

  const checkboxHandler = (event) => {
    event.preventDefault();
    setCheckboxState((prev) => !prev);
    updateHandler(text, !checkboxState, id);
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={checkboxState} onChange={(event) => checkboxHandler(event)} />
        <span>{text}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={(e) => deleteHandler(e, id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoComponent;
