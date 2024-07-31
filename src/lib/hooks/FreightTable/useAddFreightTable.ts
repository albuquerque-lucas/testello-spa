import { useState } from 'react';
import { getFreightTables, addFreightTable } from '../../api/freightTableAPI';
import { TFreightTableContext } from '../../types/freightTables';

const useHandleAddFreightTable = ({ setFreightTables }: TFreightTableContext) => {
  const [name, setName] = useState('');
  const [branchId, setBranchId] = useState<number | undefined>(undefined);
  const [customerId, setCustomerId] = useState<number | undefined>(undefined);
  const [fromPostcode, setFromPostcode] = useState('');
  const [toPostcode, setToPostcode] = useState('');
  const [fromWeight, setFromWeight] = useState(0);
  const [toWeight, setToWeight] = useState(0);
  const [cost, setCost] = useState(0);

  const handleAddFreightTable = async () => {
    if (!name || !fromPostcode || !toPostcode || !cost) {
      alert('Todos os campos são obrigatórios.');
      return;
    }
    const newFreightTable = {
      branch_id: branchId,
      customer_id: customerId,
      from_postcode: fromPostcode,
      to_postcode: toPostcode,
      from_weight: fromWeight,
      to_weight: toWeight,
      cost: cost,
      name: name,
    };
    const postResult = await addFreightTable(newFreightTable);
    const getFreightTablesResult = await getFreightTables();
    if (postResult && getFreightTablesResult) {
      setFreightTables(getFreightTablesResult);
      setBranchId(undefined);
      setCustomerId(undefined);
      setFromPostcode('');
      setToPostcode('');
      setFromWeight(0);
      setToWeight(0);
      setCost(0);
      setName('');
    }
  };

  return {
    name, setName, branchId, setBranchId, customerId, setCustomerId,
    fromPostcode, setFromPostcode, toPostcode, setToPostcode,
    fromWeight, setFromWeight, toWeight, setToWeight, cost, setCost,
    handleAddFreightTable,
  };
};

export default useHandleAddFreightTable;
