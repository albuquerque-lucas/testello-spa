import { APIPaginatedResponse, NavigationLink } from "./responses";

export type Customer = {
  id: number;
  name: string;
};

export type TCustomerContext = {
  customers: APIPaginatedResponse<Customer> | null;
  setCustomers: (customers: APIPaginatedResponse<Customer> | null) => void;
  navigationLinks: NavigationLink[] | null;
  setNavigationLinks: (navigationLinks: NavigationLink[] | null) => void;
}

export type CustomerProviderProps = {
  children: React.ReactNode;
}