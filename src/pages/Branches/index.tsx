import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import useBranchData from '../../lib/hooks/Branch/useBranchData';
import CustomerForm from '../../components/Forms/CustomerForm'; // Usando o mesmo formulário
import Input from '../../components/Inputs/Input';
import SelectInput from '../../components/Inputs/SelectInput';
import { Branch } from '../../lib/types/branches';
import NavLinks from '../../components/NavLinks/NavLinks';
import { getBranches, addBranch, updateBranch, deleteBranch } from '../../lib/api/branchAPI';

const Branches: React.FC = () => {
  const { branches, setBranches } = useBranchData();
  const [showForm, setShowForm] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [newBranchLocation, setNewBranchLocation] = useState('');
  const [filterBranchName, setFilterBranchName] = useState('');
  const [filterOrder, setFilterOrder] = useState('desc');
  const [editBranchId, setEditBranchId] = useState<number | null>(null);
  const [editBranchName, setEditBranchName] = useState('');
  const [editBranchLocation, setEditBranchLocation] = useState('');

  useEffect(() => {
    const fetchBranches = async () => {
      const branchData = await getBranches();
      if (branchData) {
        setBranches(branchData);
      }
    };

    fetchBranches();
  }, [setBranches]);

  const handleEdit = async (id: number) => {
    const editedBranch = {
      name: editBranchName,
      location: editBranchLocation,
    };
    const editResult = await updateBranch(id, editedBranch);
    const getBranchesResult = await getBranches();
    if (editResult && getBranchesResult) {
      setBranches(getBranchesResult);
      alert(`Filial com id: ${id} editada com sucesso!`);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir esta filial?')) {
      const deleteResult = await deleteBranch(id);
      const getBranchesResult = await getBranches();
      if (deleteResult && getBranchesResult) {
        setBranches(getBranchesResult);
        alert(`Filial com id: ${id} deletada com sucesso!`);
      }
    }
  };

  const handleAddBranch = async () => {
    if (!newBranchName || !newBranchLocation) {
      alert('Os campos nome e localização são obrigatórios.');
      return;
    }
    const newBranch = {
      name: newBranchName,
      location: newBranchLocation,
    };
    const postResult = await addBranch(newBranch);
    const getBranchesResult = await getBranches();
    if (postResult && getBranchesResult) {
      setBranches(getBranchesResult);
      setNewBranchName('');
      setNewBranchLocation('');
    }
  };

  const handleFilterBranch = async () => {
    const params = {
      name: filterBranchName,
      order: filterOrder,
    };
    const getBranchesResult = await getBranches('/api/branches', params);
    if (getBranchesResult) {
      setBranches(getBranchesResult);
    }
  };

  const toggleAddBranchForm = () => {
    setShowForm(!showForm);
    if (showFilterForm) {
      setShowFilterForm(false);
    }
  };

  const toggleFilterBranchForm = () => {
    setShowFilterForm(!showFilterForm);
    if (showForm) {
      setShowForm(false);
    }
  };

  const startEditing = (branch: Branch) => {
    setEditBranchId(branch.id);
    setEditBranchName(branch.name);
    setEditBranchLocation(branch.location);
  };

  const cancelEditing = () => {
    setEditBranchId(null);
    setEditBranchName('');
    setEditBranchLocation('');
  };

  const confirmEditing = async () => {
    if (editBranchId !== null) {
      await handleEdit(editBranchId);
      setEditBranchId(null);
      setEditBranchName('');
      setEditBranchLocation('');
    }
  };

  const handleNavigate = async (url: string | null) => {
    if (url) {
      const getBranchesResult = await getBranches(url);
      if (getBranchesResult) {
        setBranches(getBranchesResult);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Dashboard de Filiais</h3>
        <div>
          <button className="btn btn-dark me-2" onClick={toggleAddBranchForm}>
            {showForm ? 'Cancelar' : 'Adicionar Filial'}
          </button>
          <button className="btn btn-dark" onClick={toggleFilterBranchForm}>
            {showFilterForm ? 'Cancelar' : 'Filtrar Filial'}
          </button>
        </div>
      </div>
      {
        showForm && (
          <CustomerForm buttonText="Adicionar" handleAddCustomer={handleAddBranch}>
            <Input
              type="text"
              placeholder="Nome da filial"
              value={newBranchName}
              onChange={(e) => setNewBranchName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Localização da filial"
              value={newBranchLocation}
              onChange={(e) => setNewBranchLocation(e.target.value)}
            />
          </CustomerForm>
        )
      }
      {
        showFilterForm && (
          <CustomerForm buttonText="Filtrar" handleAddCustomer={handleFilterBranch}>
            <Input
              type="text"
              placeholder="Filtro..."
              value={filterBranchName}
              onChange={(e) => setFilterBranchName(e.target.value)}
            />
            <SelectInput
              value={filterOrder}
              onChange={(e) => setFilterOrder(e.target.value)}
            />
          </CustomerForm>
        )
      }
      <div className='d-flex justify-content-center'>
        <NavLinks links={branches?.links || []} onNavigate={handleNavigate} />
      </div>
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
          {
            branches?.data.map((branch: Branch) => (
              <tr key={branch.id}>
                <td>{branch.id}</td>
                <td>
                  {
                    editBranchId === branch.id ? (
                      <Input
                        type="text"
                        value={editBranchName}
                        placeholder="Nome da filial"
                        onChange={(e) => setEditBranchName(e.target.value)}
                      />
                    ) : (
                      branch.name
                    )
                  }
                </td>
                <td>
                  {
                    editBranchId === branch.id ? (
                      <Input
                        type="text"
                        value={editBranchLocation}
                        placeholder="Localização da filial"
                        onChange={(e) => setEditBranchLocation(e.target.value)}
                      />
                    ) : (
                      branch.location
                    )
                  }
                </td>
                <td className="text-end">
                  {
                    editBranchId === branch.id ? (
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
                          onClick={() => startEditing(branch)}
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
                      </>
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Branches;
