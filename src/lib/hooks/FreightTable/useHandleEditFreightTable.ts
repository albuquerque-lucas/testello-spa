import { useState } from 'react';
import { getFreightTables, updateFreightTable } from '../../api/freightTableAPI';
import { TFreightTableContext, FreightTable } from '../../types/freightTables';

const useHandleEditFreightTable = ({ setFreightTables }: TFreightTableContext) => {
  const [editFreightTableId, setEditFreightTableId] = useState<number | null>(null);
  const [editBranchId, setEditBranchId] = useState<number | undefined>(undefined);
  const [editCustomerId, setEditCustomerId] = useState<number | undefined>(undefined);
  const [editFromPostcode, setEditFromPostcode] = useState('');
  const [editToPostcode, setEditToPostcode] = useState('');
  const [editFromWeight, setEditFromWeight] = useState(0);
  const [editToWeight, setEditToWeight] = useState(0);
  const [editCost, setEditCost] = useState(0);
  const [editName, setEditName] = useState('');

  const handleEdit = async (id: number) => {
    const editedFreightTable = {
      branch_id: editBranchId,
      customer_id: editCustomerId,
      from_postcode: editFromPostcode,
      to_postcode: editToPostcode,
      from_weight: editFromWeight,
      to_weight: editToWeight,
      cost: editCost,
      name: editName,
    };
    const editResult = await updateFreightTable(id, editedFreightTable);
    const getFreightTablesResult = await getFreightTables();
    if (editResult && getFreightTablesResult) {
      setFreightTables(getFreightTablesResult);
      alert(`Tabela de frete com id: ${id} editada com sucesso!`);
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

  const confirmEditing = async () => {
    if (editFreightTableId !== null) {
      await handleEdit(editFreightTableId);
      setEditFreightTableId(null);
      setEditBranchId(undefined);
      setEditCustomerId(undefined);
      setEditFromPostcode('');
      setEditToPostcode('');
      setEditFromWeight(0);
      setEditToWeight(0);
      setEditCost(0);
      setEditName('');
    }
  };

  return {
    editFreightTableId, editBranchId, editCustomerId, editFromPostcode, editToPostcode,
    editFromWeight, editToWeight, editCost, editName,
    startEditing, cancelEditing, confirmEditing,
    setEditBranchId, setEditCustomerId, setEditFromPostcode, setEditToPostcode,
    setEditFromWeight, setEditToWeight, setEditCost, setEditName,
  };
};

export default useHandleEditFreightTable;
