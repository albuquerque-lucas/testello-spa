import React from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { CustomerProvider } from './lib/context/CustomerContext';
import { BranchProvider } from './lib/context/BranchContext';
import './App.css'

function App() {

  return (
    <main>
      <BranchProvider>
        <CustomerProvider>
          <RouterProvider router={ router } />
        </CustomerProvider>
      </BranchProvider>
    </main>
  )
}

export default App
