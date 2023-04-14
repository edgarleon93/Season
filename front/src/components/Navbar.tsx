import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type DropdownItem = {
  label: string;
  link: string;
};

type NavbarProps = {
  dropdownItems?: DropdownItem[];
};

export function Navbar({ dropdownItems }: NavbarProps): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-bg px-2 py-5">
      <div className="container mx-auto flex items-center justify-center">
        <div>
          <div
            className="relative cursor-pointer"
            onClick={toggleDropdown}
            onBlur={() => setIsDropdownOpen(false)}
          >
            <img src={''} className="absolute left-10 mr-3 h-9" alt="" />
            <h1 className="text-red text-3xl">Season</h1>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 rounded bg-white shadow-lg">
                {dropdownItems?.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
