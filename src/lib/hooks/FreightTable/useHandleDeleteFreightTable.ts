import { getFreightTables, deleteFreightTable } from '../../api/freightTableAPI';
import { TFreightTableContext } from '../../types/freightTables';

const useHandleDeleteFreightTable = ({ setFreightTables }: TFreightTableContext) => {
  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir esta tabela de frete?')) {
      const deleteResult = await deleteFreightTable(id);
      const getFreightTablesResult = await getFreightTables();
      if (deleteResult && getFreightTablesResult) {
        setFreightTables(getFreightTablesResult);
        alert(`Tabela de frete com id: ${id} deletada com sucesso!`);
      }
    }
  };

  return handleDelete;
};

export default useHandleDeleteFreightTable;
