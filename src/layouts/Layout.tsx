import React from "react";
import NavMenu from "../components/NavMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 p-4">
        <NavMenu />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Testello. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
