import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from '../layouts/Layout';
import Home from '../pages/home';
import FreightTables from '../pages/FreightTables';
import Branches from '../pages/Branches';
import Customers from '../pages/Customers';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/> }>
      <Route index element={<Home />} />
      <Route path='fretes' element={<FreightTables />} />
      <Route path='filiais' element={<Branches />} />
      <Route path='clientes' element={<Customers />} />
    </Route>
  )
);