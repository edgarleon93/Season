import React, { useEffect, useState } from 'react';
import SidebarRow from './SidebarRow';
import { Home } from 'react-feather';
import { Bell } from 'react-feather';
import { Search } from 'react-feather';
import AvatarPicModif from '../avatar/avatarPicModif';
import { AvatarDropdown } from '../avatar/avatarDropdown';
import axios from 'axios';

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
    <div className=" fixed bottom-0 w-full">
      <hr className="my-2 text-white"></hr>
      {avatarUrl ? (
        <div className="container mx-auto grid grid-cols-3 px-4 py-4">
          <div className="mt-2.5 flex justify-center">
            <SidebarRow Icon={Home} />
          </div>

          <div className="mt-2.5 flex justify-center">
            <SidebarRow Icon={Search} />
          </div>
          <div className=" flex justify-center">
            <AvatarDropdown imgSrc={avatarUrl.profilePic} />
          </div>
        </div>
      ) : (
        <p> loading</p>
      )}
    </div>
  );
}
