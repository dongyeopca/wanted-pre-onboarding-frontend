import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodo, updateTodo, deleteTodo } from '../request/apiRequest';
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

  useEffect(() => {
    getHandler();
  }, []);

  const getHandler = async () => {
    const result = await getTodo();
    setTodoList(result.data);
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

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoComponent setTodoList={setTodoList} />
      <div>
        <ul>
          {todoList.length ? (
            todoList.map(({ id, todo, isCompleted, userId }) => (
              <TodoComponent
                key={id}
                id={id}
                todo={todo}
                isCompleted={isCompleted}
                userId={userId}
                deleteHandler={deleteHandler}
                updateHandler={updateHandler}
              />
            ))
          ) : (
            <div>None</div>
          )}
        </ul>
      </div>
    </>
  );
}

export default Todo;
