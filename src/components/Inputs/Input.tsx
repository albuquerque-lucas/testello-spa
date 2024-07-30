import React, { FC } from 'react';

interface CustomInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<CustomInputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="form-control mb-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
