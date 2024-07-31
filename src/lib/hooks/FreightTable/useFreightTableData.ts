import { useContext, useEffect } from 'react';
import { getFreightTables } from '../../api/freightTableAPI';
import { FreightTableContext } from '../../context/FreightTableContext';

const useFreightTableData = () => {
  const {
    freightTables,
    setFreightTables,
  } = useContext(FreightTableContext);

  useEffect(() => {
    const fetchFreightTables = async () => {
      const data = await getFreightTables();
      if (data) {
        setFreightTables(data);
      }
    };
    fetchFreightTables();
  }, [setFreightTables]);

  return {
    freightTables,
    setFreightTables,
  };
};

export default useFreightTableData;
