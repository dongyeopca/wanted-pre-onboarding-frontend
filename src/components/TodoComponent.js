import React, { useState } from 'react';

function TodoComponent(props) {
  const { id, userId, isCompleted, todo, deleteHandler, updateHandler } = props;
  const [checkboxState, setCheckboxState] = useState(isCompleted);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo);
  const checkboxHandler = (e) => {
    setCheckboxState((prev) => !prev);
    updateHandler(e, text, !checkboxState, id);
  };
  const todoUpdateHandler = (e) => {
    updateHandler(e, text, isCompleted, id);
    setEdit(false);
  };

  const editTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={checkboxState} onChange={(event) => checkboxHandler(event)} />
        {edit ? <input type="text" data-testid="modify-input" value={text} onChange={(e) => editTextHandler(e)} /> : <span>{todo}</span>}
      </label>
      {edit ? (
        <button data-testid="submit-button" onClick={(e) => todoUpdateHandler(e, text, isCompleted, id)}>
          제출
        </button>
      ) : (
        <button data-testid="modify-button" onClick={() => setEdit(true)}>
          수정
        </button>
      )}
      {edit ? (
        <button data-testid="cancel-button" onClick={() => setEdit(false)}>
          취소
        </button>
      ) : (
        <button data-testid="delete-button" onClick={(e) => deleteHandler(e, id)}>
          삭제
        </button>
      )}
    </li>
  );
}

export default TodoComponent;
