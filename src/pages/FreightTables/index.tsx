import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import useFreightTableData from '../../lib/hooks/FreightTable/useFreightTableData';
import CustomerForm from '../../components/Forms/CustomerForm'; // Usando o mesmo formulário
import Input from '../../components/Inputs/Input';
import SelectInput from '../../components/Inputs/SelectInput';
import { FreightTable } from '../../lib/types/freightTables';
import NavLinks from '../../components/NavLinks/NavLinks';

const FreightTables: React.FC = () => {
  const { freightTables, setFreightTables } = useFreightTableData();
  const [showForm, setShowForm] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [branchId, setBranchId] = useState<number | undefined>(undefined);
  const [customerId, setCustomerId] = useState<number | undefined>(undefined);
  const [fromPostcode, setFromPostcode] = useState('');
  const [toPostcode, setToPostcode] = useState('');
  const [fromWeight, setFromWeight] = useState(0);
  const [toWeight, setToWeight] = useState(0);
  const [cost, setCost] = useState(0);
  const [name, setName] = useState('');
  const [filterBranchId, setFilterBranchId] = useState('');
  const [filterOrder, setFilterOrder] = useState('desc');
  const [editFreightTableId, setEditFreightTableId] = useState<number | null>(null);
  const [editBranchId, setEditBranchId] = useState<number | undefined>(undefined);
  const [editCustomerId, setEditCustomerId] = useState<number | undefined>(undefined);
  const [editFromPostcode, setEditFromPostcode] = useState('');
  const [editToPostcode, setEditToPostcode] = useState('');
  const [editFromWeight, setEditFromWeight] = useState(0);
  const [editToWeight, setEditToWeight] = useState(0);
  const [editCost, setEditCost] = useState(0);
  const [editName, setEditName] = useState('');

  const handleEdit = (id: number) => {
    alert(`Editar tabela de frete com id: ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Deletar tabela de frete com id: ${id}`);
  };

  const handleAddFreightTable = () => {
    alert('Adicionar nova tabela de frete');
  };

  const handleFilterFreightTable = () => {
    alert(`Filtrar tabela de frete com nome: ${filterBranchId} e ordem: ${filterOrder}`);
  };

  const toggleAddFreightTableForm = () => {
    setShowForm(!showForm);
    if (showFilterForm) {
      setShowFilterForm(false);
    }
  };

  const toggleFilterFreightTableForm = () => {
    setShowFilterForm(!showFilterForm);
    if (showForm) {
      setShowForm(false);
    }
  };

  const startEditing = (freightTable: FreightTable) => {
    setEditFreightTableId(freightTable.id);
    setEditBranchId(freightTable.branch_id);
    setEditCustomerId(freightTable.customer_id);
    setEditFromPostcode(freightTable.from_postcode);
    setEditToPostcode(freightTable.to_postcode);
    setEditFromWeight(freightTable.from_weight);
    setEditToWeight(freightTable.to_weight);
    setEditCost(freightTable.cost);
    setEditName(freightTable.name);
  };

  const cancelEditing = () => {
    setEditFreightTableId(null);
    setEditBranchId(undefined);
    setEditCustomerId(undefined);
    setEditFromPostcode('');
    setEditToPostcode('');
    setEditFromWeight(0);
    setEditToWeight(0);
    setEditCost(0);
    setEditName('');
  };

  const confirmEditing = () => {
    if (editFreightTableId !== null) {
      handleEdit(editFreightTableId);
      cancelEditing();
    }
  };

  const handleNavigate = (url: string | null) => {
    alert(`Navegar para: ${url}`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Dashboard de Tabelas de Frete</h3>
        <div>
          <button className="btn btn-dark me-2" onClick={toggleAddFreightTableForm}>
            {showForm ? 'Cancelar' : 'Adicionar Tabela de Frete'}
          </button>
          <button className="btn btn-dark" onClick={toggleFilterFreightTableForm}>
            {showFilterForm ? 'Cancelar' : 'Filtrar Tabela de Frete'}
          </button>
        </div>
      </div>
      {showForm && (
        <CustomerForm buttonText="Adicionar" handleAddCustomer={handleAddFreightTable}>
          <Input
            type="number"
            placeholder="ID da Filial"
            value={branchId || ''}
            onChange={(e) => setBranchId(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="ID do Cliente"
            value={customerId || ''}
            onChange={(e) => setCustomerId(Number(e.target.value))}
          />
          <Input
            type="text"
            placeholder="Código de Origem"
            value={fromPostcode}
            onChange={(e) => setFromPostcode(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Código de Destino"
            value={toPostcode}
            onChange={(e) => setToPostcode(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Peso de Origem"
            value={fromWeight}
            onChange={(e) => setFromWeight(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Peso de Destino"
            value={toWeight}
            onChange={(e) => setToWeight(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Custo"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          />
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </CustomerForm>
      )}
      {showFilterForm && (
        <CustomerForm buttonText="Filtrar" handleAddCustomer={handleFilterFreightTable}>
          <Input
            type="text"
            placeholder="Filtro por ID da Filial"
            value={filterBranchId}
            onChange={(e) => setFilterBranchId(e.target.value)}
          />
          <SelectInput
            value={filterOrder}
            onChange={(e) => setFilterOrder(e.target.value)}
          />
        </CustomerForm>
      )}
      <div className='d-flex justify-content-center'>
        <NavLinks links={freightTables?.links || []} onNavigate={handleNavigate} />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID da Filial</th>
            <th>ID do Cliente</th>
            <th>Código de Origem</th>
            <th>Código de Destino</th>
            <th>Peso de Origem</th>
            <th>Peso de Destino</th>
            <th>Custo</th>
            <th>Nome</th>
            <th className="text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          {freightTables?.data.map((freightTable: FreightTable) => (
            <tr key={freightTable.id}>
              <td>{freightTable.id}</td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="number"
                    value={editBranchId || ''}
                    placeholder="ID da Filial"
                    onChange={(e) => setEditBranchId(Number(e.target.value))}
                  />
                ) : (
                  freightTable.branch_id
                )}
              </td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="number"
                    value={editCustomerId || ''}
                    placeholder="ID do Cliente"
                    onChange={(e) => setEditCustomerId(Number(e.target.value))}
                  />
                ) : (
                  freightTable.customer_id
                )}
              </td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="text"
                    value={editFromPostcode}
                    placeholder="Código de Origem"
                    onChange={(e) => setEditFromPostcode(e.target.value)}
                  />
                ) : (
                  freightTable.from_postcode
                )}
              </td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="text"
                    value={editToPostcode}
                    placeholder="Código de Destino"
                    onChange={(e) => setEditToPostcode(e.target.value)}
                  />
                ) : (
                  freightTable.to_postcode
                )}
              </td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="number"
                    value={editFromWeight}
                    placeholder="Peso de Origem"
                    onChange={(e) => setEditFromWeight(Number(e.target.value))}
                  />
                ) : (
                  freightTable.from_weight
                )}
              </td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="number"
                    value={editToWeight}
                    placeholder="Peso de Destino"
                    onChange={(e) => setEditToWeight(Number(e.target.value))}
                  />
                ) : (
                  freightTable.to_weight
                )}
              </td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="number"
                    value={editCost}
                    placeholder="Custo"
                    onChange={(e) => setEditCost(Number(e.target.value))}
                  />
                ) : (
                  freightTable.cost
                )}
              </td>
              <td>
                {editFreightTableId === freightTable.id ? (
                  <Input
                    type="text"
                    value={editName}
                    placeholder="Nome"
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  freightTable.name
                )}
              </td>
              <td className="text-end">
                {editFreightTableId === freightTable.id ? (
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
                      onClick={() => startEditing(freightTable)}
                      data-bs-toggle="tooltip"
                      title="Editar Tabela de Frete"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(freightTable.id)}
                      data-bs-toggle="tooltip"
                      title="Deletar Tabela de Frete"
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

export default FreightTables;
