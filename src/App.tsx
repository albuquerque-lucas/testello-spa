import React from 'react';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <main>
        <RouterProvider router={ router } />
    </main>
  )
}

export default App
