import React from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { CustomerProvider } from './lib/context/CustomerContext';
import { BranchProvider } from './lib/context/BranchContext';
import { FreightTableProvider } from './lib/context/FreightTableContext';
import './App.css'

function App() {

  return (
    <main>
      <FreightTableProvider>
        <BranchProvider>
          <CustomerProvider>
            <RouterProvider router={ router } />
          </CustomerProvider>
        </BranchProvider>
      </FreightTableProvider>
    </main>
  )
}

export default App
