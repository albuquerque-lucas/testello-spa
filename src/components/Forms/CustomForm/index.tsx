import React, { FC, ReactNode } from 'react';

interface CustomFormProps {
  buttonText: string;
  handleAddCustomer: () => void;
  children: ReactNode;
}

const CustomForm: FC<CustomFormProps> = ({ buttonText, handleAddCustomer, children }) => {
  return (
    <div className="mb-4">
      { children }
      <button className="btn btn-primary mt-2 mb-5" onClick={handleAddCustomer}>
        { buttonText }
      </button>
    </div>
  );
};

export default CustomForm;
