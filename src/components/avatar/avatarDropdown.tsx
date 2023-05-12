import React, { useState, useEffect, useRef, useContext } from 'react';
import { ActiveIconContext } from '../Sidebar/SidebarRow';
import Logout from '../Logout';
interface AvatarDropdownProps {
  imgSrc: string;
}

export const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ imgSrc }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { clearActiveIcon } = useContext(ActiveIconContext);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    clearActiveIcon();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
      clearActiveIcon();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex" ref={dropdownRef}>
      <img
        src={imgSrc}
        alt="avatar"
        className=" h-10 w-10 cursor-pointer rounded-full"
        onClick={toggleDropdown}
      />
      {dropdownVisible && (
        <div
          id="dropdownTop"
          className="absolute bottom-0 z-10 mb-16 w-28 divide-y divide-gray-100 rounded-md bg-white "
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="/profile" className="text-bg block px-4 py-2 ">
                My Profile
              </a>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
