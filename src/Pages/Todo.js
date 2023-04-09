import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodo, postTodo, updateTodo, deleteTodo } from '../request/apiRequest';
import TodoComponent from '../components/TodoComponent.js';
import AddTodoComponent from '../components/AddTodoComponent.js';
function Todo() {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signin');
    }
  }, [navigate]);

  useEffect(() => {
    getHandler();
  }, []);

  const getHandler = async () => {
    const result = await getTodo();
    setTodoList(result.data);
  };
  const postHandler = async (event, todo, setTodo) => {
    event.preventDefault();
    await postTodo(todo);
    setTodo('');
    console.log(todo);
    getHandler();
  };

  const deleteHandler = async (event, id) => {
    event.preventDefault();
    await deleteTodo(id);
    getHandler();
  };

  const updateHandler = async (event, todo, isCompleted, id) => {
    event.preventDefault();
    await updateTodo(todo, isCompleted, id);
    getHandler();
  };

  const logoutHandler = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <>
      <button id="logout" onClick={logoutHandler}>
        로그아웃
      </button>
      <h1>😄 Todo List</h1>
      <AddTodoComponent postHandler={postHandler} />
      <div>
        <ul>
          {todoList?.map(({ id, todo, isCompleted, userId }) => (
            <TodoComponent
              key={id}
              id={id}
              todo={todo}
              isCompleted={isCompleted}
              userId={userId}
              deleteHandler={deleteHandler}
              updateHandler={updateHandler}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
