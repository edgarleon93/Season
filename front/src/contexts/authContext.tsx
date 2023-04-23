import { createContext } from 'react';

interface AuthContextProps {
  token: string | null;
  userId: string | null; // Ajouter cette ligne
  setToken: (token: string | null) => void;
  setUserId: (userId: string | null) => void; // Ajouter cette ligne
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  userId: null,
  setToken: () => { },
  setUserId: () => { },
});

