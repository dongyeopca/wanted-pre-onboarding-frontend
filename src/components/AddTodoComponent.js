import React, { useState } from 'react';
import { getTodo, postTodo } from '../request/apiRequest';

function AddTodoComponent(props) {
  const { setTodoList } = props;
  const [todo, setTodo] = useState();
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    postTodo(todo).then(async () => {
      const result = await getTodo();
      setTodoList(result.data);
    });
  };
  return (
    <div>
      <input data-testid="new-todo-input" type="text" onChange={onChangeTodo} />
      <button data-testid="new-todo-add-button" onClick={submitHandler}>
        추가
      </button>
    </div>
  );
}

export default AddTodoComponent;
