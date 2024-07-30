import React from 'react';

interface SelectInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, onChange }) => {
  return (
    <select className="form-control" value={value} onChange={onChange}>
      <option value="desc">Decrescente</option>
      <option value="asc">Crescente</option>
    </select>
  );
};

export default SelectInput;
