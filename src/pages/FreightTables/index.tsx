import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import FreightTableCreateForm from '../../components/Forms/FreightTableCreateForm';

const FreightTables: React.FC = () => {
  const [freightTables, setFreightTables] = useState([
    {
      id: 1,
      branchId: 1,
      customerId: 1,
      fromPostcode: '1000-000',
      toPostcode: '2000-000',
      fromWeight: 100,
      toWeight: 200,
      cost: 500,
    },
    {
      id: 2,
      branchId: 2,
      customerId: 2,
      fromPostcode: '3000-000',
      toPostcode: '4000-000',
      fromWeight: 200,
      toWeight: 300,
      cost: 600,
    },
    {
      id: 3,
      branchId: 3,
      customerId: 3,
      fromPostcode: '5000-000',
      toPostcode: '6000-000',
      fromWeight: 300,
      toWeight: 400,
      cost: 700,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [branchId, setBranchId] = useState(0);
  const [customerId, setCustomerId] = useState(0);
  const [fromPostcode, setFromPostcode] = useState('');
  const [toPostcode, setToPostcode] = useState('');
  const [fromWeight, setFromWeight] = useState(0);
  const [toWeight, setToWeight] = useState(0);
  const [cost, setCost] = useState(0);

  const handleEdit = (id: number) => {
    alert(`Editar tabela de frete com id: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir esta tabela de frete?')) {
      setFreightTables(freightTables.filter(freightTable => freightTable.id !== id));
    }
  };

  const handleAddFreightTable = () => {
    const newFreightTable = {
      id: freightTables.length + 1,
      branchId,
      customerId,
      fromPostcode,
      toPostcode,
      fromWeight,
      toWeight,
      cost,
    };
    setFreightTables([...freightTables, newFreightTable]);
    setBranchId(0);
    setCustomerId(0);
    setFromPostcode('');
    setToPostcode('');
    setFromWeight(0);
    setToWeight(0);
    setCost(0);
    setShowForm(false);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Dashboard de Tabelas de Frete</h3>
        <button className="btn btn-dark" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Adicionar Tabela de Frete'}
        </button>
      </div>
      {
        showForm && (
          <FreightTableCreateForm
            branchId={branchId}
            customerId={customerId}
            fromPostcode={fromPostcode}
            toPostcode={toPostcode}
            fromWeight={fromWeight}
            toWeight={toWeight}
            cost={cost}
            setBranchId={setBranchId}
            setCustomerId={setCustomerId}
            setFromPostcode={setFromPostcode}
            setToPostcode={setToPostcode}
            setFromWeight={setFromWeight}
            setToWeight={setToWeight}
            setCost={setCost}
            handleAddFreightTable={handleAddFreightTable}
          />
        )
      }
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
            <th className="text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          {freightTables.map((freightTable) => (
            <tr key={freightTable.id}>
              <td>{freightTable.id}</td>
              <td>{freightTable.branchId}</td>
              <td>{freightTable.customerId}</td>
              <td>{freightTable.fromPostcode}</td>
              <td>{freightTable.toPostcode}</td>
              <td>{freightTable.fromWeight}</td>
              <td>{freightTable.toWeight}</td>
              <td>{freightTable.cost}</td>
              <td className="text-end">
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(freightTable.id)}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreightTables;
