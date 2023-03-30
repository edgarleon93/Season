import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '~/contexts/Auth';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useContext(Auth);

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default RequireAuth;

// [Note : If needed]
// const AuthenticatedRoute = ({ path, element }) => {
//   const { isAuthenticated } = useContext(Auth);
//   return isAuthenticated ? (
//     <Route path={path} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default AuthenticatedRoute;
