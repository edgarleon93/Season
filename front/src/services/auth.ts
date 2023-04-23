import api from './api';

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export async function login(data: LoginData) {
  const response = await api.post('/login', data);
  console.log('Login response:', response);
  localStorage.setItem('authToken', response.data.token);
  localStorage.setItem('username', data.username);
  return response.data;
}

export async function register(data: RegisterData) {
  const response = await api.post('/register', data);
  console.log('Register response:', response);
  localStorage.setItem('authToken', response.data.token);
  localStorage.setItem('username', data.username);
  return response.data;
}

