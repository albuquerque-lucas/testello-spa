import { axios } from '../axios';
import { Branch } from '../types/branches';
import { APIPaginatedResponse } from '../types/responses';
import { toast } from 'react-toastify';

export const getBranches = async (url: string = '/api/branches', params: any = {}): Promise<APIPaginatedResponse<Branch> | null> => {
  try {
    const response = await axios.get<APIPaginatedResponse<Branch>>(url, { params });
    console.log('response', response.data);
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando buscar as filiais');
    console.log('Ocorreu um erro tentando buscar as filiais', error);
    return null;
  }
}

export const addBranch = async (branch: Partial<Branch>): Promise<Branch | null> => {
  try {
    const response = await axios.post<Branch>('/api/branches', branch);
    toast.success('Filial adicionada com sucesso');
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando adicionar a filial');
    console.log('Ocorreu um erro tentando adicionar a filial', error);
    return null;
  }
}

export const updateBranch = async (id: number, branch: Partial<Branch>): Promise<Branch | null> => {
  try {
    const response = await axios.put<Branch>(`/api/branches/${id}`, branch);
    toast.success('Filial atualizada com sucesso');
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando atualizar a filial');
    console.log('Ocorreu um erro tentando atualizar a filial', error);
    return null;
  }
}

export const deleteBranch = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/branches/${id}`);
    toast.success('Filial deletada com sucesso');
    return true;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando deletar a filial');
    console.log('Ocorreu um erro tentando deletar a filial', error);
    return false;
  }
}
