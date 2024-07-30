import { axios } from '../axios';
import { Branch } from '../types/branches';
import { APIPaginatedResponse } from '../types/responses';

export const getBranches = async (url: string = '/api/branches', params: any = {}): Promise<APIPaginatedResponse<Branch> | null> => {
  try {
    const response = await axios.get<APIPaginatedResponse<Branch>>(url, { params });
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando buscar as filiais', error);
    return null;
  }
}

export const addBranch = async (branch: Partial<Branch>): Promise<Branch | null> => {
  try {
    const response = await axios.post<Branch>('/api/branches', branch);
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando adicionar a filial', error);
    return null;
  }
}

export const updateBranch = async (id: number, branch: Partial<Branch>): Promise<Branch | null> => {
  try {
    const response = await axios.put<Branch>(`/api/branches/${id}`, branch);
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando atualizar a filial', error);
    return null;
  }
}

export const deleteBranch = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/branches/${id}`);
    return true;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando deletar a filial', error);
    return false;
  }
}
