import React from 'react';
import SidebarRow from './SidebarRow';
import { Home } from 'react-feather';
import { Bell } from 'react-feather';
import { Search } from 'react-feather';
import AvatarPicModif from '../avatar/avatarPicModif';

export function Sidebar() {
  return (
    <div className="fixed bottom-0 w-full">
      <hr className="my-2 text-white"></hr>
      <div className="container mx-auto grid grid-cols-3 px-4 py-4">
        <div className="flex justify-center">
          <SidebarRow Icon={Home} />
        </div>

        <div className="flex justify-center">
          <SidebarRow Icon={Search} />
        </div>
      </div>
    </div>
  );
}
