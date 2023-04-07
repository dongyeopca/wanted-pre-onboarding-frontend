import React, { useState } from 'react';
import { updateTodo } from '../request/apiRequest';

function TodoComponent(props) {
  const { id, userId } = props;
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const [todo, setTodo] = useState(props.todo);
  const isCompletedChangeHandler = () => {
    setIsCompleted((prev) => !prev);
    updateTodo(todo, !isCompleted, id);
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={isCompletedChangeHandler} />
        <span>{todo}</span>
      </label>
    </li>
  );
}

export default TodoComponent;
