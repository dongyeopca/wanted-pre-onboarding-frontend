import axios from 'axios';
import api from '../const/api';
const getTodo = () => {
  try {
    const result = axios({
      method: api.getTodos.method,
      url: api.getTodos.url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return result;
  } catch (error) {
    alert(error.response.data.message);
    throw new Error(error);
  }
};

const postTodo = (value) => {
  try {
    const result = axios({
      method: api.createTodo.method,
      url: api.createTodo.url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: {
        todo: value,
      },
    });
    return result;
  } catch (error) {
    alert(error.response.data.message);
    throw new Error(error);
  }
};
export { getTodo, postTodo };
