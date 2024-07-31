import React from 'react';

interface BranchCreateFormProps {
  name: string;
  location: string;
  setName: (name: string) => void;
  setLocation: (location: string) => void;
  handleAddBranch: () => void;
}

const BranchCreateForm: React.FC<BranchCreateFormProps> = ({ name, location, setName, setLocation, handleAddBranch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter branch name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter branch location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddBranch}>
        Adicionar
      </button>
    </div>
  );
};

export default BranchCreateForm;
