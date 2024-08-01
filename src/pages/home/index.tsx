import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <h1 className="display-4 mb-4">Bem-vindo à Testello</h1>
      <p className="h5 mb-4 text-center">Esta é a página inicial. Escolha, dentre as opções, o aspecto que deseja administrar:</p>
      <ul className="d-flex flex-column justify-content-center align-items-center list-unstyled w-100 mt-5">
        <li className="mb-3 w-100 d-flex justify-content-center">
          <NavLink
            to="/fretes"
            className="btn btn-secondary w-25"
          >
            Fretes
          </NavLink>
        </li>
        <li className="mb-3 w-100 d-flex justify-content-center">
          <NavLink
            to="/filiais"
            className="btn btn-secondary w-25"
          >
            Filiais
          </NavLink>
        </li>
        <li className="w-100 d-flex justify-content-center">
          <NavLink
            to="/clientes"
            className="btn btn-secondary w-25"
          >
            Clientes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
