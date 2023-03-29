import React, { useState } from 'react';

import userImg from '../../public/img/avatar1.webp';

type DropdownItem = {

  label: string;

  link: string;

};

 

type NavbarProps = {

  dropdownItems: DropdownItem[];

};

 

export function Navbar({ dropdownItems }: NavbarProps) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 

  const toggleDropdown = () => {

    setIsDropdownOpen(!isDropdownOpen);

  };

 

  return (

    <nav className="bg-bg border-b-2 border-solid border-white px-2 py-5 ">

      <div className="container mx-auto flex items-center justify-center">

        <div>

          <div

            className="relative cursor-pointer"

            onClick={toggleDropdown}

            onBlur={() => setIsDropdownOpen(false)}

          >

            <img

              src={userImg}

              className="absolute left-10 mr-3 h-9"

              alt="Flowbite Logo"

            />

            <span className="text-red">Season</span>

            {isDropdownOpen && (

              <div className="absolute z-10 bg-white rounded shadow-lg mt-2">

                {dropdownItems.map((item) => (

                  <a

                    key={item.link}

                    href={item.link}

                    className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white"

                  >

                    {item.label}

                  </a>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>

    </nav>

  );

}