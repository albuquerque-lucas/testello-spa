import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import CustomerCreateForm from '../../components/Forms/CustomerCreateForm';
import useCustomerData from '../../lib/hooks/Customer/useCustomerData';
import { Customer } from '../../lib/types/customers';
import { APIPaginatedResponse } from '../../lib/types/responses';

const Customers: React.FC = () => {
  const { customers } = useCustomerData();
  const [showForm, setShowForm] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState('');

  const handleEdit = (id: number) => {
    alert(`Editar cliente com id: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Deletar cliente com id: ${id}`);
  };

  const handleAddCustomer = () => {
    alert(`Adicionar cliente com nome: ${newCustomerName}`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Dashboard de Clientes</h3>
        <button className="btn btn-dark" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Adicionar Cliente'}
        </button>
      </div>
      {
        showForm && (
          <CustomerCreateForm
            name={newCustomerName}
            setName={setNewCustomerName}
            handleAddCustomer={handleAddCustomer}
          />
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
