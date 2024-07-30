import { useContext, useEffect } from 'react';
import { getCustomers } from '../../api/customerAPI';
import { CustomerContext } from '../../context/CustomerContext';

const useCustomerData = () => {
  const {
    customers,
    setCustomers,
  } = useContext(CustomerContext);

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();
      if (data) {
        setCustomers(data);
      }
    };
    fetchCustomers();
  }, [setCustomers]);

  return {
    customers,
    setCustomers,
  };
};

export default useCustomerData;
