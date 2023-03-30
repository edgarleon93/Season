import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Image } from './img/Image';

type DropdownItem = {
  label: string;
  link: string;
};

type NavbarProps = {
  dropdownItems?: DropdownItem[];
};

export function Navbar({ dropdownItems }: NavbarProps): JSX.Element {
=======
import { Link } from 'react-dom';

import userImg from '../../public/img/avatar1.webp';

type DropdownItem = {
  label: string;

  link: string;
};

type NavbarProps = {
  dropdownItems?: DropdownItem[];
};

export function Navbar({ dropdownItems }: NavbarProps) {
>>>>>>> 2c6c7d5b08124e7e3c7cbe8471cc6a05fdab2594
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
<<<<<<< HEAD
    <nav className="bg-bg px-2 py-5">
=======
    <nav className="bg-bg border-b-2 border-solid border-white px-2 py-5 ">
>>>>>>> 2c6c7d5b08124e7e3c7cbe8471cc6a05fdab2594
      <div className="container mx-auto flex items-center justify-center">
        <div>
          <div
            className="relative cursor-pointer"
            onClick={toggleDropdown}
            onBlur={() => setIsDropdownOpen(false)}
          >
<<<<<<< HEAD
            <img src={''} className="absolute left-10 mr-3 h-9" alt="" />
            <h1 className="text-red text-3xl">Season</h1>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 rounded bg-white shadow-lg">
                {dropdownItems?.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
=======
            <img
              src={userImg}
              className="absolute left-10 mr-3 h-9"
              alt="Flowbite Logo"
            />

            <span className="text-red">Season</span>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 rounded bg-white shadow-lg">
                {dropdownItems.map((item) => (
                  // <a
                  //   key={item.link}
                  //   href={item.link}
                  //   className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white"
                  // >
                  //   {item.label}
                  // </a>
                  // [NOTE]: Maybe used the Link component from react-dom
                  <Link
                    key={item.link}
                    href={item.link}
>>>>>>> 2c6c7d5b08124e7e3c7cbe8471cc6a05fdab2594
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
