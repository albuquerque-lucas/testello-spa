import React, { FC, ReactNode } from 'react';

interface CustomerFormProps {
  buttonText: string;
  handleAddCustomer: () => void;
  children: ReactNode;
}

const CustomerForm: FC<CustomerFormProps> = ({ buttonText, handleAddCustomer, children }) => {
  return (
    <div className="mb-4">
      { children }
      <button className="btn btn-primary mt-2 mb-5" onClick={handleAddCustomer}>
        { buttonText }
      </button>
    </div>
  );
};

export default CustomerForm;
