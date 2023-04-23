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

    fetchUserData('Brandi63');
  }, []);
  return (
    <div className=" bg-bg fixed bottom-0 w-full">
      <hr className=" text-white"></hr>
      {avatarUrl ? (
        <div className="container mx-auto grid grid-cols-3 px-4 py-4">
          <SidebarContext>
            <a href="/Home" className="mt-2.5 flex justify-center">
              <SidebarRow id="home" Icon={Home} />
            </a>

            <a href="/search" className="mt-2.5 flex justify-center">
              <SidebarRow id="search" Icon={Search} />
            </a>
          </SidebarContext>
          <div className=" flex justify-center">
            <AvatarDropdown imgSrc={avatarUrl.profilePic} />
          </div>
        </div>
      ) : (
        <p className="text-center text-white"> loading</p>
      )}
    </div>
  );
}
