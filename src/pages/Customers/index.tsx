import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import useCustomerData from '../../lib/hooks/Customer/useCustomerData';
import CustomerForm from '../../components/Forms/CustomerForm';
import Input from '../../components/Inputs/Input';
import { Customer } from '../../lib/types/customers';
import NavLinks from '../../components/NavLinks/NavLinks';
import { getCustomers, addCustomer, updateCustomer, deleteCustomer } from '../../lib/api/customerAPI';

const Customers: React.FC = () => {
  const { customers, setCustomers } = useCustomerData();
  const [showForm, setShowForm] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState('');
  const [filterCustomerName, setFilterCustomerName] = useState('');
  const [editCustomerId, setEditCustomerId] = useState<number | null>(null);
  const [editCustomerName, setEditCustomerName] = useState('');

  const handleEdit = async (id: number) => {
    const editedCustomer = {
      name: editCustomerName,
    };
    const editResult = await updateCustomer(id, editedCustomer);
    const getCustomersResult = await getCustomers();
    if (editResult && getCustomersResult) {
      setCustomers(getCustomersResult);
      alert(`Cliente com id: ${id} editado com sucesso!`);
    }
  };
  
  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir este cliente?')) {
      const deleteResult = await deleteCustomer(id);
      const getCustomersResult = await getCustomers();
      if (deleteResult && getCustomersResult) {
        setCustomers(getCustomersResult);
        alert(`Cliente com id: ${id} deletado com sucesso!`);
      }
    }
  };

  const handleAddCustomer = async () => {
    if (!newCustomerName) {
      alert('O campo nome é obrigatório.');
      return;
    }
    const newCustomer = {
      name: newCustomerName,
    };
    const postResult = await addCustomer(newCustomer);
    const getCustomersResult = await getCustomers();
    if (postResult && getCustomersResult) {
      setCustomers(getCustomersResult);
      setNewCustomerName('');
    }
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

  const startEditing = (customer: Customer) => {
    setEditCustomerId(customer.id);
    setEditCustomerName(customer.name);
  };

  const cancelEditing = () => {
    setEditCustomerId(null);
    setEditCustomerName('');
  };

  const confirmEditing = async () => {
    if (editCustomerId !== null) {
      await handleEdit(editCustomerId);
      setEditCustomerId(null);
      setEditCustomerName('');
    }
  };

  const handleNavigate = async (url: string | null) => {
    if (url) {
      const getCustomersResult = await getCustomers(url);
      if (getCustomersResult) {
        setCustomers(getCustomersResult);
      }
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
      {showForm && (
        <CustomerForm buttonText="Adicionar" handleAddCustomer={handleAddCustomer}>
          <Input
            type="text"
            placeholder="Nome do cliente"
            value={newCustomerName}
            onChange={(e) => setNewCustomerName(e.target.value)}
          />
        </CustomerForm>
      )}
      {showFilterForm && (
        <CustomerForm buttonText="Filtrar" handleAddCustomer={handleFilterCustomer}>
          <Input
            type="text"
            placeholder="Filtro..."
            value={filterCustomerName}
            onChange={(e) => setFilterCustomerName(e.target.value)}
          />
        </CustomerForm>
      )}
      <div className='d-flex justify-content-center'>
        <NavLinks links={customers?.links || []} onNavigate={handleNavigate} />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th className="text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          {customers?.data.map((customer: Customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>
                {editCustomerId === customer.id ? (
                  <Input
                    type="text"
                    value={editCustomerName}
                    placeholder="Nome do cliente"
                    onChange={(e) => setEditCustomerName(e.target.value)}
                  />
                ) : (
                  customer.name
                )}
              </td>
              <td className="text-end">
                {editCustomerId === customer.id ? (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={confirmEditing}
                      data-bs-toggle="tooltip"
                      title="Confirmar Edição"
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={cancelEditing}
                      data-bs-toggle="tooltip"
                      title="Cancelar Edição"
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => startEditing(customer)}
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
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
