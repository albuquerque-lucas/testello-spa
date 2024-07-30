import { axios } from "../axios";
import { Customer } from "../types/customers";
import { APIPaginatedResponse } from "../types/responses";

export const getCustomers = async () => {
  try {
    const response = await axios.get<APIPaginatedResponse<Customer>>('/api/customers');
    return response.data;
  } catch (error: any) {
    console.log('Ocorreu um erro tentando cuscar os clientes', error);
    return null;
  }
}