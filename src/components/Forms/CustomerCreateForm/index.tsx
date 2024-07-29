import React, { FC } from 'react';

interface CustomerCreateFormProps {
  name: string;
  setName: (name: string) => void;
  handleAddCustomer: () => void;
}

const CustomerCreateForm: FC<CustomerCreateFormProps> = ({ name, setName, handleAddCustomer }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter customer name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddCustomer}>
        Adicionar
      </button>
    </div>
  );
};

export default CustomerCreateForm;
