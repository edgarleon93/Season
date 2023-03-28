import react from 'react';

import React from 'react';

export function Navbar() {
  return (
    <>
      <div> hello</div>
    </>
  );
}
interface NavBarProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

const NavBar = ({ title, links }: NavBarProps) => {
  return (
    
    <nav>
      
      <div className="nav-brand">{title}</div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;