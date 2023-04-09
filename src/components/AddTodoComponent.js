import React, { useState } from 'react';

function AddTodoComponent(props) {
  const { postHandler } = props;
  const [todo, setTodo] = useState();
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <input data-testid="new-todo-input" type="text" value={todo} onChange={onChangeTodo} />
      <button data-testid="new-todo-add-button" onClick={(e) => postHandler(e, todo, setTodo)}>
        추가
      </button>
    </div>
  );
}

export default AddTodoComponent;
