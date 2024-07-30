import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import BranchCreateForm from '../../components/Forms/BranchCreateForm';

const Branches: React.FC = () => {
  const [branches, setBranches] = useState([
    { id: 1, name: 'Matriz', location: 'Nova York' },
    { id: 2, name: 'Filial Secundária', location: 'Los Angeles' },
    { id: 3, name: 'Filial Terciária', location: 'Chicago' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [newBranchLocation, setNewBranchLocation] = useState('');

  const handleEdit = (id: number) => {
    alert(`Editar filial com id: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir esta filial?')) {
      setBranches(branches.filter(branch => branch.id !== id));
    }
  };

  const handleAddBranch = () => {
    const newBranch = {
      id: branches.length + 1,
      name: newBranchName,
      location: newBranchLocation,
    };
    setBranches([...branches, newBranch]);
    setNewBranchName('');
    setNewBranchLocation('');
    setShowForm(false);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Dashboard de Filiais</h3>
        <button className="btn btn-dark" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Adicionar Filial'}
        </button>
      </div>
      {showForm && (
        <BranchCreateForm
          name={newBranchName}
          location={newBranchLocation}
          setName={setNewBranchName}
          setLocation={setNewBranchLocation}
          handleAddBranch={handleAddBranch}
        />
      )}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Localização</th>
            <th className="text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id}>
              <td>{branch.id}</td>
              <td>{branch.name}</td>
              <td>{branch.location}</td>
              <td className="text-end">
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(branch.id)}
                  data-bs-toggle="tooltip"
                  title="Editar Filial"
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(branch.id)}
                  data-bs-toggle="tooltip"
                  title="Deletar Filial"
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

export default Branches;
