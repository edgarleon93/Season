import { createContext } from 'react';

// export default React.createContext({
//   isAuthenticated: false,
//   setIsAuthenticated: (value) => {},
// });
// interface AuthContextType {
//   isAuthenticated: boolean;
// }
export const AuthContext = createContext({
  isAuthenticated: false,
});
