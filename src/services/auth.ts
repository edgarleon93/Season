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
  localStorage.setItem('userId', response.data.userId);
  localStorage.setItem("profilePic", response.data.profilePic);
  return response.data;
}

export async function register(data: RegisterData, setUserId: (userId: string | null) => void) {
  const response = await api.post('/register', data);
  console.log('Register response:', response);
  localStorage.setItem('authToken', response.data.token);
  localStorage.setItem('username', data.username);
  const userId = response.data.User._id;
  localStorage.setItem('userId', userId);
  setUserId(userId);
  return response.data;
}

