const baseUrl = 'https://www.pre-onboarding-selection-task.shop';

const api = {
  signUp: { url: `${baseUrl}/auth/signup`, method: 'POST' },
  signIn: { url: `${baseUrl}/auth/signin`, method: 'POST' },
  createTodo: { url: `${baseUrl}/todos`, method: 'POST' },
  getTodos: { url: `${baseUrl}/todos`, method: 'GET' },
  updateTodo: { url: `${baseUrl}/todos/`, method: 'PUT' },
  deleteTodo: { url: `${baseUrl}/todos/`, method: 'DELETE' },
};

export default api;
