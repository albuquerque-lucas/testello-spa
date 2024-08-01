import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { CustomerProvider } from './lib/context/CustomerContext';
import { BranchProvider } from './lib/context/BranchContext';
import { FreightTableProvider } from './lib/context/FreightTableContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  return (
    <main>
      <FreightTableProvider>
        <BranchProvider>
          <CustomerProvider>
            <RouterProvider router={ router } />
            <ToastContainer />
          </CustomerProvider>
        </BranchProvider>
      </FreightTableProvider>
    </main>
  )
}

export default App
