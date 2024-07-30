import { axios } from '../axios';
import { Customer } from '../types/customers';
import { APIPaginatedResponse } from '../types/responses';

export const getCustomers = async (): Promise<APIPaginatedResponse<Customer> | null> => {
  try {
    const response = await axios.get<APIPaginatedResponse<Customer>>('/api/customers');
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando buscar os clientes', error);
    return null;
  }
}

export const addCustomer = async (customer: Partial<Customer>): Promise<Customer | null> => {
  try {
    const response = await axios.post<Customer>('/api/customers', customer);
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando adicionar o cliente', error);
    return null;
  }
}

export const updateCustomer = async (id: number, customer: Partial<Customer>): Promise<Customer | null> => {
  try {
    const response = await axios.put<Customer>(`/api/customers/${id}`, customer);
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando atualizar o cliente', error);
    return null;
  }
}

export const deleteCustomer = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`/api/customers/${id}`);
    return true;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando deletar o cliente', error);
    return false;
  }
}
