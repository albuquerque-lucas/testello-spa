import { axios } from '../axios';
import { Customer } from '../types/customers';
import { APIPaginatedResponse } from '../types/responses';
import { toast } from 'react-toastify';

export const getCustomers = async (url: string = '/api/customers', params: any = {}): Promise<APIPaginatedResponse<Customer> | null> => {
  try {
    const response = await axios.get<APIPaginatedResponse<Customer>>(url, { params });
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando buscar os clientes');
    console.log('Ocorreu um erro tentando buscar os clientes', error);
    return null;
  }
}

export const addCustomer = async (customer: Partial<Customer>): Promise<Customer | null> => {
  try {
    const response = await axios.post<Customer>('/api/customers', customer);
    toast.success('Cliente adicionado com sucesso');
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando adicionar o cliente');
    console.log('Ocorreu um erro tentando adicionar o cliente', error);
    return null;
  }
}

export const updateCustomer = async (id: number, customer: Partial<Customer>): Promise<Customer | null> => {
  try {
    const response = await axios.put<Customer>(`/api/customers/${id}`, customer);
    toast.success('Cliente atualizado com sucesso');
    return response.data;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando atualizar o cliente');
    console.log('Ocorreu um erro tentando atualizar o cliente', error);
    return null;
  }
}

export const deleteCustomer = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/customers/${id}`);
    toast.success('Cliente deletado com sucesso');
    return true;
  } catch (error: any) {
    toast.error('Ocorreu um erro tentando deletar o cliente');
    console.log('Ocorreu um erro tentando deletar o cliente', error);
    return false;
  }
}
