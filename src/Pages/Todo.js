import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodo } from '../request/apiRequest';
import TodoComponent from '../components/TodoComponent';
import AddTodoComponent from '../components/AddTodoComponent.js';
function Todo() {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signin');
    }
  }, [navigate]);
  console.log('chagned');
  useEffect(() => {
    (async function () {
      const result = await getTodo();
      setTodoList(result.data);
    })();
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoComponent setTodoList={setTodoList} />
      <div>
        <ul>
          {todoList.length ? (
            todoList.map(({ id, todo, isCompleted, userId }) => <TodoComponent id={id} todo={todo} isCompleted={isCompleted} userId={userId} />)
          ) : (
            <div>None</div>
          )}
        </ul>
      </div>
    </>
  );
}

export default Todo;
