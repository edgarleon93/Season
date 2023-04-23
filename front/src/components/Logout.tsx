// Logout.tsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActiveIconContext } from './Sidebar/SidebarRow';
import api from '~/services/api';
import { AuthContext } from '~/contexts/authContext';
// Importez AuthContext ici

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { clearActiveIcon } = useContext(ActiveIconContext);
  const { token } = useContext(AuthContext); // Récupérez le token à partir du contexte

  const handleLogout = async () => {
    try {
      await api.post(
        '/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Incluez le token dans les en-têtes de la requête
          },
        },
      );
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      clearActiveIcon();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button className="text-bg block px-4 py-2" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default Logout;
