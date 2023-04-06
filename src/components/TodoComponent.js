import React from 'react';

function TodoComponent(props) {
  const { id, todo, isCompleted, userId } = props;
  console.log(id);
  return (
    <li id={id}>
      <label>
        <input type="checkbox" checked={isCompleted} />
        <span>{todo}</span>
      </label>
    </li>
  );
}

export default TodoComponent;
