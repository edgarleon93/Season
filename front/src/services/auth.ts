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
  return response.data;
}

export async function register(data: RegisterData) {
  const response = await api.post('/register', data);
  return response.data;
}
