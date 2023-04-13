import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthProps {
  authState?: { token: string | null; authenticated: boolean | null };
  onRegister?: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => Promise<any>;
  onLogin?: (username: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

export const API_URL = 'https://season-app-hbxam.ondigitalocean.app';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = localStorage.getItem('authToken');
      console.log('stored:', token);
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const register = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    try {
      return await axios.post(`${API_URL}/register`, {
        username,
        email,
        password,
        confirmPassword,
      });
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      console.log('~ file : AuthContext.tsx:41 ~ login ~ result:', result);
      setAuthState({
        token: result.data.token,
        authenticated: true,
      });
      axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
      if (result.data.token) {
        localStorage.setItem('authToken', result.data.token);
      }
      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const logout = async () => {
    localStorage.removeItem('authToken');
    axios.defaults.headers.common['Authorization'] = '';
    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = { onRegister: register, onLogin: login, onLogout: logout, authState };
  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};
