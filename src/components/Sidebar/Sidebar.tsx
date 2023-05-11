import React, { useEffect, useState } from 'react';
import { Home } from 'react-feather';
import { Search } from 'react-feather';
import { AvatarDropdown } from '../avatar/avatarDropdown';
import axios from 'axios';
import { SidebarContext, SidebarRow } from './SidebarRow';

export function Sidebar() {
  const [avatarUrl, setAvatarUrl] = useState<any>(null);
  const baseURL = 'https://season-app-hbxam.ondigitalocean.app';

  useEffect(() => {
    const fetchUserData = async (username: string) => {
      try {
        const response = await axios.get(`${baseURL}/username/${username}`);
        const data = response.data;
        console.log('DATA :', data);
        setAvatarUrl(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const loggedInUsername = localStorage.getItem('username');
    if (loggedInUsername) {
      fetchUserData(loggedInUsername);
    } else {
      console.error("Aucun nom d'utilisateur trouvé pour l'utilisateur connecté");
    }
  }, []);
  return (
    <div className="bg-bg fixed bottom-0 w-full lg:top-0 lg:left-0 lg:bottom-auto lg:h-full lg:w-auto lg:overflow-auto lg:px-8">
      <hr className="text-white"></hr>
      {avatarUrl ? (
        <div className="container mx-auto grid h-full grid-cols-3 px-4 py-4 lg:flex lg:flex-col">
          <SidebarContext>
            <a href="/Home" className="mt-2.5 flex justify-center lg:py-8">
              <SidebarRow id="home" Icon={Home} />
            </a>
            <a href="/search" className="mt-2.5 flex justify-center lg:py-8">
              <SidebarRow id="search" Icon={Search} />
            </a>
          </SidebarContext>
          <div className="flex justify-center lg:mt-auto lg:py-8">
            <AvatarDropdown imgSrc={avatarUrl.profilePic} />
          </div>
        </div>
      ) : (
        <p className="text-center text-white">loading</p>
      )}
    </div>
  );
}

export default Sidebar;
