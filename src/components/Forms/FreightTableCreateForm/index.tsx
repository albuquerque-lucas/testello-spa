import React, { FC } from 'react';

interface FreightTableCreateFormProps {
  branchId: number;
  customerId: number;
  fromPostcode: string;
  toPostcode: string;
  fromWeight: number;
  toWeight: number;
  cost: number;
  setBranchId: (branchId: number) => void;
  setCustomerId: (customerId: number) => void;
  setFromPostcode: (fromPostcode: string) => void;
  setToPostcode: (toPostcode: string) => void;
  setFromWeight: (fromWeight: number) => void;
  setToWeight: (toWeight: number) => void;
  setCost: (cost: number) => void;
  handleAddFreightTable: () => void;
}

const FreightTableCreateForm: FC<FreightTableCreateFormProps> = ({
  branchId,
  customerId,
  fromPostcode,
  toPostcode,
  fromWeight,
  toWeight,
  cost,
  setBranchId,
  setCustomerId,
  setFromPostcode,
  setToPostcode,
  setFromWeight,
  setToWeight,
  setCost,
  handleAddFreightTable,
}) => {
  return (
    <div className="mb-4">
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Digite o ID da filial"
        value={branchId}
        onChange={(e) => setBranchId(Number(e.target.value))}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Digite o ID do cliente"
        value={customerId}
        onChange={(e) => setCustomerId(Number(e.target.value))}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Digite o CEP de origem"
        value={fromPostcode}
        onChange={(e) => setFromPostcode(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Digite o CEP de destino"
        value={toPostcode}
        onChange={(e) => setToPostcode(e.target.value)}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Digite o peso de origem"
        value={fromWeight}
        onChange={(e) => setFromWeight(Number(e.target.value))}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Digite o peso de destino"
        value={toWeight}
        onChange={(e) => setToWeight(Number(e.target.value))}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Digite o custo"
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
      />
      <button className="btn btn-primary" onClick={handleAddFreightTable}>
        Adicionar
      </button>
    </div>
  );
};

export default FreightTableCreateForm;
