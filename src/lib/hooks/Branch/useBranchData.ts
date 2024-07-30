import { useContext, useEffect } from 'react';
import { getBranches } from '../../api/branchAPI';
import { BranchContext } from '../../context/BranchContext';

const useCustomerData = () => {
  const {
    branches,
    setBranches,
  } = useContext(BranchContext);

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getBranches();
      if (data) {
        setBranches(data);
      }
    };
    fetchCustomers();
  }, [setBranches]);

  return {
    branches,
    setBranches,
  };
};

export default useCustomerData;
