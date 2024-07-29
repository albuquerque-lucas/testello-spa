import React from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import './App.css'

function App() {

  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
