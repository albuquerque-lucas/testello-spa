import React from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { CustomerProvider } from './lib/context/CustomerContext';
import './App.css'

function App() {

  return (
    <main>
      <CustomerProvider>
        <RouterProvider router={ router } />
      </CustomerProvider>
    </main>
  )
}

export default App
