import { axios, axiosFormData } from '../axios';
import { FreightTable } from '../types/freightTables';
import { APIPaginatedResponse } from '../types/responses';
import { toast } from 'react-toastify';

export const getFreightTables = async (url: string = '/api/freight-tables', params: any = {}): Promise<APIPaginatedResponse<FreightTable> | null> => {
  try {
    const response = await axios.get<APIPaginatedResponse<FreightTable>>(url, { params });
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando buscar as tabelas de fretes');
    console.log('Ocorreu um erro tentando buscar as tabelas de fretes', error);
    return null;
  }
}

export const addFreightTable = async (freightTable: Partial<FreightTable>): Promise<FreightTable | null> => {
  try {
    const response = await axios.post<FreightTable>('/api/freight-tables', freightTable);
    toast.success('Tabela de frete adicionada com sucesso');
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando adicionar a tabela de frete');
    console.log('Ocorreu um erro tentando adicionar a tabela', error);
    return null;
  }
}

export const updateFreightTable = async (id: number, freightTable: Partial<FreightTable>): Promise<FreightTable | null> => {
  try {
    const response = await axios.put<FreightTable>(`/api/freight-tables/${id}`, freightTable);
    toast.success('Tabela de frete atualizada com sucesso');
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando atualizar a tabela de frete');
    console.log('Ocorreu um erro tentando atualizar a tabela', error);
    return null;
  }
}

export const deleteFreightTable = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/freight-tables/${id}`);
    toast.success('Tabela de frete deletada com sucesso');
    return true;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando deletar a tabela de frete');
    console.log('Ocorreu um erro tentando deletar a tabela de frete', error);
    return false;
  }
}

export const uploadFreightCsv = async (files: FileList): Promise<{ message: string } | { error: string } | null> => {
  try {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('csv_file[]', file);
    });

    const response = await axiosFormData.post<{ message: string }>('api/upload-freight-csv', formData);
    toast.success('O arquivo está sendo processado. Aguarde um momento e atualize a página');
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando fazer upload dos arquivos CSV', error);
    return null;
  }
}

export const bulkDeleteFreightTables = async (): Promise<boolean> => {
  try {
    await axios.post('/api/freight-tables/bulkDelete');
    toast.success('Todos os registros da tabela de frete foram deletados com sucesso');
    return true;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando deletar todos os registros da tabela de frete');
    console.log('Ocorreu um erro tentando deletar todos os registros da tabela de frete', error);
    return false;
  }
}
