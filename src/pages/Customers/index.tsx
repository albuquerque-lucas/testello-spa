import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import useCustomerData from '../../lib/hooks/Customer/useCustomerData';
import CustomerForm from '../../components/Forms/CustomerForm';
import Input from '../../components/Inputs/Input';
import { Customer } from '../../lib/types/customers';

const Customers: React.FC = () => {
  const { customers } = useCustomerData();
  const [showForm, setShowForm] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState('');
  const [filterCustomerName, setFilterCustomerName] = useState('');

  const handleEdit = (id: number) => {
    alert(`Editar cliente com id: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Deletar cliente com id: ${id}`);
  };

  const handleAddCustomer = () => {
    alert(`Adicionar cliente com nome: ${newCustomerName}`);
  };

  const handleFilterCustomer = () => {
    alert(`Filtrar cliente com nome: ${filterCustomerName}`);
  };

  const toggleAddCustomerForm = () => {
    setShowForm(!showForm);
    if (showFilterForm) {
      setShowFilterForm(false);
    }
  };

  const toggleFilterCustomerForm = () => {
    setShowFilterForm(!showFilterForm);
    if (showForm) {
      setShowForm(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Dashboard de Clientes</h3>
        <div>
          <button className="btn btn-dark me-2" onClick={toggleAddCustomerForm}>
            {showForm ? 'Cancelar' : 'Adicionar Cliente'}
          </button>
          <button className="btn btn-dark" onClick={toggleFilterCustomerForm}>
            {showFilterForm ? 'Cancelar' : 'Filtrar Cliente'}
          </button>
        </div>
      </div>
      {
        showForm && (
          <CustomerForm
            buttonText='Adicionar'
            handleAddCustomer={ handleAddCustomer }
          >
            <Input
              type="text"
              placeholder="Nome do cliente"
              value={newCustomerName}
              onChange={(e) => setNewCustomerName(e.target.value)}
            />
          </CustomerForm>
        )
      }
      {
        showFilterForm && (
          <CustomerForm
            buttonText='Filtrar'
            handleAddCustomer={handleFilterCustomer}
          >
            <Input
              type="text"
              placeholder="Filtro..."
              value={filterCustomerName}
              onChange={(e) => setFilterCustomerName(e.target.value)}
            />
          </CustomerForm>
        )
      }
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th className="text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            customers?.data.map((customer: Customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td className="text-end">
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(customer.id)}
                    data-bs-toggle="tooltip"
                    title="Editar Cliente"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(customer.id)}
                    data-bs-toggle="tooltip"
                    title="Deletar Cliente"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
