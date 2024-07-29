import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="mx-60">
      <ul className="text-white flex space-x-4 items-center">
        <li>
          <NavLink to="/"> 
            Home 
          </NavLink>
        </li>
        <li>
          <NavLink to="/fretes" className="text-white hover:text-gray-300">
            Fretes
          </NavLink>
        </li>
        <li>
          <NavLink to="/filiais" className="text-white hover:text-gray-300">
            Filiais
          </NavLink>
        </li>
        <li>
          <NavLink to="/clientes" className="text-white hover:text-gray-300">
            Clientes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
