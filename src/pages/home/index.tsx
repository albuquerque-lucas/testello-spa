import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center min-vh-100 pt-5 bg-secondary-subtle">
      <h1 className="display-4 mb-4">Bem-vindo à Testello</h1>
      <p className="h5 mb-4 text-center">Esta é a página inicial. Escolha, dentre as opções, o aspecto que deseja administrar:</p>
      <ul className="d-flex flex-column flex-md-row justify-content-center list-unstyled">
        <li className="mb-3 mb-md-0 mx-md-2">
          <NavLink
            to="/fretes"
            className="btn btn-secondary btn-lg w-100"
          >
            Fretes
          </NavLink>
        </li>
        <li className="mb-3 mb-md-0 mx-md-2">
          <NavLink
            to="/filiais"
            className="btn btn-secondary btn-lg w-100"
          >
            Filiais
          </NavLink>
        </li>
        <li className="mx-md-2">
          <NavLink
            to="/clientes"
            className="btn btn-secondary btn-lg w-100"
          >
            Clientes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
