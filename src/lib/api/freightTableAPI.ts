import { axios, axiosFormData } from '../axios';
import { FreightTable } from '../types/freightTables';
import { APIPaginatedResponse } from '../types/responses';

export const getFreightTables = async (url: string = '/api/freight-tables', params: any = {}): Promise<APIPaginatedResponse<FreightTable> | null> => {
  try {
    const response = await axios.get<APIPaginatedResponse<FreightTable>>(url, { params });
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando buscar as tabelas de fretes', error);
    return null;
  }
}

export const addFreightTable = async (freightTable: Partial<FreightTable>): Promise<FreightTable | null> => {
  try {
    const response = await axios.post<FreightTable>('/api/freight-tables', freightTable);
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando adicionar a tabela', error);
    return null;
  }
}

export const updateFreightTable = async (id: number, freightTable: Partial<FreightTable>): Promise<FreightTable | null> => {
  try {
    const response = await axios.put<FreightTable>(`/api/freight-tables/${id}`, freightTable);
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando atualizar a tabela', error);
    return null;
  }
}

export const deleteFreightTable = async (ids: number[]): Promise<boolean> => {
  try {
    await axios.post('/api/freight-tables/delete', { ids });
    return true;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando deletar as tabelas de frete', error);
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
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando fazer upload dos arquivos CSV', error);
    return null;
  }
}
