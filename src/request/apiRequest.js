import axios from 'axios';
import api from '../const/api';
const getTodo = async () => {
  try {
    const result = await axios({
      method: api.getTodos.method,
      url: api.getTodos.url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return result.data;
  } catch (error) {
    alert(error.response.data.message);
    throw new Error(error);
  }
};

export { getTodo };
