import NavMenu from "../components/NavMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-3">
        <NavMenu />
      </header>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <footer className="bg-dark text-white py-3 text-center">
        © 2024 Testello. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Layout;
